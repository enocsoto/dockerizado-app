import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1685189792013 implements MigrationInterface {
    name = 'Init1685189792013'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`usuario\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`usuario\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`usuario\` ADD \`id\` varchar(36) NOT NULL PRIMARY KEY`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`usuario\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`usuario\` ADD \`id\` varchar(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`usuario\` ADD PRIMARY KEY (\`id\`)`);
    }

}
