import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Groups1598801742849 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "groups",
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
                    name: "created_at",
                    type: "timestamp",
                    default: null,
                },
            ],
        }), true);

    }

    public async down(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.dropTable("groups");

    }

}
