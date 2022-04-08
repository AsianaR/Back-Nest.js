import { Controller, Get } from "@nestjs/common";
import { DisciplineService } from "./discipline.service";


@Controller('disciplines')

export class DisciplineController{
    constructor(private readonly disciplineService: DisciplineService){}
    @Get()
    async findAll() : Promise<{disciplines: string[]}>{
        const disciplines = await this.disciplineService.findAll();
        return {
            disciplines: disciplines.map(disciplines => disciplines.name),
        }
    }
}