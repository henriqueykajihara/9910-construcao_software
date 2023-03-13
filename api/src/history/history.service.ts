import { Injectable } from '@nestjs/common';
import { mockList } from './history-mock';

export interface History {
    id: number;
    value: number;
    type: 'alimentação' | 'transferência';
    date: string;
}

@Injectable()
export class HistoryService {
    private history: History[];

    async findAll(): Promise<History[]> {
        //trocar para chamada de banco
        this.history = await mockList;
        return this.history;
    }
}
