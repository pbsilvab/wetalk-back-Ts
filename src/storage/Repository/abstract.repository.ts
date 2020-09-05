import { ConnectDatabase } from '../connection';
import { getRepository } from 'typeorm';

export interface SearchOptions {
    first: number;
    after: string;
    last: number;
    before: string;
    filters: object;
    order: string;
    search_terms: object;
    builderName: string;
}

export class AbstractRepository {

    conn: any = null;

    orderType : "ASC" | "DESC" | undefined;


    protected db = ConnectDatabase.getInstance();

    async dbConn<T>(entity:T) {

        try {

            const connection = await this.db.getConnection();

            this.conn = await connection.getRepository(entity);

        } catch (error) {

            throw new Error(error.message);

        }

    }

    setAccount(account: any){

        if(!account.account_id) {
            throw new Error("No Account added");
        }

       // this.accountId = account.account_id;

    }

    setOperator(before:string, after:string) {
        let operator = '>=';

        if (before) {
            operator = '<='
        }else if (after) {
            operator = '>='
        }

        return operator;
    }

    setOrder(order:any) {
        this.orderType = order;
    }

    setLimit(first:number, last:number) {

        this.setOrder("ASC");
        let limit = 10

        if( first ) {
            this.setOrder("ASC");
            limit = first;
        } else if ( last ) {
            this.setOrder("DESC");
            limit = last;
        }

        return limit;
    }

    // ID
    setAfter(after:string) {
        return after || null;
    }

    // ID
    setBefore(before:string) {
        return before || null;
    }

    setFilters(filters: any ) {

        let filterString = '';
        const filterObject: any = {};

        for (const filter of filters) {
            filterString += ` AND ${filter.field} = :field${filter.field}`;
            filterObject[`field${filter.field}`] = filter.value;
        }

        return {fields: filterString, values: filterObject};
    }

    setSearchTerms(searchTerms: any) {

        let searchString = '';
        const searchObject: any = {};

        for (const field of searchTerms) {
            const op = field.match ? field.match : '=';
            searchString += ` AND ${field.field} ${op} :field${field.field}`;
            searchObject[`field${field.field}`] = field.value;
        }

        return {fields: searchString, values: searchObject};

    }
    getCursor(nodes:any, position: string) {

        if( position === 'first') {
            return nodes[0] ? nodes[0].id : '';
        }

        if( position === 'last') {
            return nodes[0] ? nodes[nodes.length - 1].id : '';
        }
    }

    async checkPage(db:any, cursor:string, op:string, query:any ){

        if(cursor === '') {
            return false;
        }

        db.where(`${query.name}.id ${op} :id`, {id: cursor});

        const page = await db.getOne();

        return page;
    }

    async constructQuery( Entity:any, options: SearchOptions) {

        const query: any = {};

        query.limit = this.setLimit(options.first, options.last);

        query.order = options.order;

        query.operator = this.setOperator(options.before, options.after);

        query.after = this.setAfter(options.after);

        query.before = this.setBefore(options.before);

        query.search_terms = this.setSearchTerms(options.search_terms);

        query.filters = this.setFilters(options.filters);

        query.name = options.builderName;

        return await this.search(query, Entity);
    }

    async search(query:any, Entity:any) {

        const db = await getRepository(Entity).createQueryBuilder(query.name);

        if(query.name === 'groups') {
            db.leftJoinAndSelect("groups.channels", "channels")
            db.leftJoinAndSelect("channels.meetings", "meetings")
        }

        let whereString = ``;

        const whereOptions: any = {}

        const total = await db.where(whereString, whereOptions).getCount();

        if(query.after) {
            whereString += ` AND ${query.name}.id >= :afterId`;
            whereOptions.afterId = query.after;
        }

        if(query.before) {
            whereString += ` AND ${query.name}.id <= :beforeId`;
            whereOptions.beforeId = query.before;
        }

        if(query.filters) {
            whereString += query.filters.fields;
            Object.assign(whereOptions, query.filters.values) ;
        }

        if(query.search_terms) {
            whereString += query.search_terms.fields;
            Object.assign(whereOptions, query.search_terms.values) ;
        }

        if(query.limit) {
            db.limit(query.limit);
        }

        if(query.order){
            db.orderBy(`${query.name}.${query.order}`, this.orderType);
        } else {
            db.orderBy(`${query.name}.id`, this.orderType);
        }

        const nodes: any = await db.where(whereString, whereOptions).getMany();
        const startCursor = this.getCursor(nodes, 'first');
        const endCursor = this.getCursor(nodes, 'last');
        const hasNextPage = await this.checkPage(db, endCursor, '>', query) ? true : false;
        const hasPreviousPage = await this.checkPage(db, startCursor,'<', query) ? true : false;
        const result = {
            total,
            page: {
                startCursor,
                endCursor,
                hasNextPage,
                hasPreviousPage,
            },
            edges: nodes.map((node: { id: any; }) => {
                return {
                    cursor: node.id,
                    node,
                }
            }),
        }

        return result;
    }
}