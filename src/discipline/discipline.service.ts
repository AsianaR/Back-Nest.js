import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { DisciplineEntity } from "./discipline.entity";

@Injectable()
export class DisciplineService {
    constructor(
        @InjectRepository(DisciplineEntity)
        private readonly disciplinesRepository: Repository<DisciplineEntity>,
    ){}

    async findAll(): Promise<DisciplineEntity[]> {
        return await this.disciplinesRepository.find();
    }
}