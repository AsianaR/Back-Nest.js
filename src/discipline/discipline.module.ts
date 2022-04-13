import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DisciplineController } from "./discipline.controller";
import { DisciplineEntity } from "./discipline.entity";
import { DisciplineService } from "./discipline.service";

@Module({
    imports: [TypeOrmModule.forFeature([DisciplineEntity])],
    controllers: [DisciplineController],
    providers: [DisciplineService]
})

export class DisciplineModule{};