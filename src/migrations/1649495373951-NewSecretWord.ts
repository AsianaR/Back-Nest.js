import {MigrationInterface, QueryRunner} from "typeorm";

export class NewSecretWord1649495373951 implements MigrationInterface {
    name = 'NewSecretWord1649495373951'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "disciplines" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_9b25ea6da0741577a73c9e90aad" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "image" character varying NOT NULL DEFAULT '', "status" character varying NOT NULL DEFAULT 'free', CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "disciplines"`);
    }

}
