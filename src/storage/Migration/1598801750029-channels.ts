import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Channels1598801750029 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.createTable(new Table({
            name: "channels",
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
                    default: null,
                },
                {
                    name: "group_id",
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

        await queryRunner.dropTable("channels");

    }

}
