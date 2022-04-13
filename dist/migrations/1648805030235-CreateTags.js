"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTags1648805030235 = void 0;
class CreateTags1648805030235 {
    constructor() {
        this.name = 'CreateTags1648805030235';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "tags" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "tags"`);
    }
}
exports.CreateTags1648805030235 = CreateTags1648805030235;
//# sourceMappingURL=1648805030235-CreateTags.js.map