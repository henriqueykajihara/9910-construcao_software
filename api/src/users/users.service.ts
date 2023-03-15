import { Injectable } from '@nestjs/common';
import { users } from './constants';

export type RoleUser = 'Student' | 'Worker' | 'Teacher';
export interface User {
    id: number;
    name: string;
    username: string;
    password?: string;
    role: RoleUser;
}

@Injectable()
export class UsersService {
    private users: User[];

    constructor() {
        this.users = users;
    }

    async findOne(username: string, role: RoleUser): Promise<User | null> {
        //TODO: substituir essa busca por uma busca no banco de dados
        return this.users.find(
            (user) => user.username === username && user.role === role,
        );
    }
}
