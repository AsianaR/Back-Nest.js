import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDisciplines1649068304478 implements MigrationInterface {
    name = 'CreateDisciplines1649068304478'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "disciplines" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_9b25ea6da0741577a73c9e90aad" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "disciplines"`);
    }

}