import { Injectable } from '@nestjs/common';
import { mockList } from './history-mock';

export interface History {
    id?: number;
    value: number;
    type: 'alimentação' | 'transferência';
    date: string | Date;
}

@Injectable()
export class HistoryService {
    private history: History[] = [];
    private idAtual = 6;

    constructor() {
        this.findAll();
    }

    async findAll(): Promise<History[]> {
        //trocar para chamada de banco
        this.history = await mockList;
        return this.history;
    }

    async create({ date, value, type }: History): Promise<History> {
        this.idAtual = this.idAtual + 1;

        const historyForSave: History = {
            id: this.idAtual,
            date,
            value,
            type,
        };

        this.history.push(historyForSave);

        return historyForSave;
    }
}
