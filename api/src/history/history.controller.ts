import { Controller, Get } from '@nestjs/common';
import { HistoryService } from './history.service';

@Controller('history')
export class HistoryController {
    constructor(private historyService: HistoryService) {}

    @Get()
    async findAll(): Promise<any[]> {
        return await this.historyService.findAll();
    }
}
