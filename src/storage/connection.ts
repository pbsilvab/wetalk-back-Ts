import { createConnection, ConnectionOptions } from "typeorm";
import { setTimeout } from "timers";
import { Group } from "./Entity/Group";
import { Channel } from "./Entity/Channel";
import { Meeting } from "./Entity/Meeting";

const conOptions: ConnectionOptions = {
    type: "mysql",
    host: process.env.MYSQL_HOST,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DATABASE,
    entities: [
        Group,
        Channel,
        Meeting,
    ],
    subscribers: [],
    synchronize: false,
    logging: false,
}

export class ConnectDatabase {
    connection:any = null;
    private static instance: ConnectDatabase;
    private constructor() { }

    public static getInstance(): ConnectDatabase {

        if (!ConnectDatabase.instance) {
            ConnectDatabase.instance = new ConnectDatabase();
        }

        return ConnectDatabase.instance;
    }

    async DbConnect() {

        const connection = await createConnection(conOptions)
        .catch((err)=>{
            console.error(err);
            return false;
        });

        if(!connection){
            return false;
        }

        this.connection = connection;

        console.log("DB CONNECTED");

        return this.connection;
    }

    async getConnection() {

        if (this.connection) {
            return this.connection;
        }

        if( !(await this.DbConnect()) ) {
            await this.timeout();
            console.log('DB retry connection');
            this.connection = await this.getConnection();
        }

        return this.connection;
    }

    timeout () {
        return new Promise(resolve => setTimeout(resolve, 2000) );
    }

}