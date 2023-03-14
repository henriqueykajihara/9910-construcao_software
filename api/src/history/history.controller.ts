import { Controller, Get, Body, Post } from '@nestjs/common';
import { History, HistoryService } from './history.service';

@Controller('history')
export class HistoryController {
    constructor(private historyService: HistoryService) {}

    @Get()
    async findAll(): Promise<History[]> {
        return await this.historyService.findAll();
    }

    @Post()
    async create(@Body() history: History): Promise<History> {
        return await this.historyService.create(history);
    }
}
