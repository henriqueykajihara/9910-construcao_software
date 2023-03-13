import { History } from './history.service';

export const mockList: Promise<History[]> = Promise.resolve([
    {
        id: 0,
        value: 5,
        type: 'alimentação',
        date: new Date().toString(),
    },
    {
        id: 1,
        value: 16,
        type: 'transferência',
        date: new Date().toString(),
    },
    {
        id: 2,
        value: 5,
        type: 'alimentação',
        date: new Date().toString(),
    },
    {
        id: 3,
        value: 5,
        type: 'alimentação',
        date: new Date().toString(),
    },
    {
        id: 4,
        value: 5,
        type: 'alimentação',
        date: new Date().toString(),
    },
    {
        id: 5,
        value: 5,
        type: 'alimentação',
        date: new Date().toString(),
    },
    {
        id: 6,
        value: 5,
        type: 'alimentação',
        date: new Date().toString(),
    },
]);
