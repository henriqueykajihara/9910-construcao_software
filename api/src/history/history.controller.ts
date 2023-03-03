import { Controller, Get } from '@nestjs/common';
import { mockList } from './history-mock';

@Controller('history')
export class HistoryController {
    @Get()
    findAll(): any[] {
        const returnList = mockList;
        return returnList;
    }
}
