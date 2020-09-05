import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterGroup1598812249515 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('ALTER TABLE `groups` MODIFY COLUMN `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP');
        await queryRunner.query(`ALTER TABLE channels MODIFY COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE meetings MODIFY COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE groups MODIFY COLUMN created_at TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE channels MODIFY COLUMN created_at TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE meetings MODIFY COLUMN created_at TIMESTAMP NOT NULL`);
    }

}
