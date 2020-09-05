import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Meetings1598801759006 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.createTable(new Table({
            name: "meetings",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true,
                    length: "64",
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "from",
                    type: "timestamp",
                },
                {
                    name: "to",
                    type: "timestamp",
                },
                {
                    name: "channel_id",
                    type: "varchar",
                    length: "64",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: null,
                },
            ],
        }), true);

    }

    public async down(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.dropTable("meetings");

    }

}
