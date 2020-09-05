import { AbstractRepository } from "./abstract.repository";
import { Group } from "../Entity/Group";

export class GroupRepository extends AbstractRepository {

    private static instance: GroupRepository;

    public static getInstance(): GroupRepository {

        if (!GroupRepository.instance) {

            GroupRepository.instance = new GroupRepository();
        }

        return GroupRepository.instance;
    }

    constructor(){

        super();

        this.connect();

    }

    async connect() {
        await this.dbConn(Group);
    }

    async save(group: Group): Promise<Group> {
        return await this.conn.save(group);
    }

    async findById(groupId: string): Promise<Group> {
        return await this.conn.findOne(groupId);
    }
}