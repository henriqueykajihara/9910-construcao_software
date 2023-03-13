import { Injectable } from '@nestjs/common';
import { users } from './constants';

export interface User {
    id: number;
    name: string;
    username: string;
    password: string;
    type: 'Student' | 'Worker' | 'Teacher';
}

@Injectable()
export class UsersService {
    private users: User[];

    constructor() {
        this.users = users;
    }

    async findUserByUsername(username: string): Promise<User | null> {
        //TODO: substituir essa busca por uma busca no banco de dados
        return this.users.find((user) => user.username === username);
    }
}
