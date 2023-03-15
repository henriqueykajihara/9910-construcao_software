import { RoleUser } from 'src/enums/role.enum';
import { User } from './users.service';

export const users: User[] = [
    {
        id: 0,
        name: 'Henrique Negri Rodrigues',
        username: 'RA105480',
        password: '123456',
        role: RoleUser.Student,
    },
    {
        id: 1,
        name: 'Bruno Pereira Soares',
        username: 'RA99909',
        password: '123456',
        role: RoleUser.Student,
    },
    {
        id: 2,
        name: 'Janaina Maria Cera da Silva',
        username: 'RA115832',
        password: '123456',
        role: RoleUser.Student,
    },
    {
        id: 3,
        name: 'Henrique Yoshiharu Kajihara',
        username: 'RA78607',
        password: '123456',
        role: RoleUser.Student,
    },
    {
        id: 4,
        name: 'Beatriz Ohara',
        username: 'RA107305',
        password: '654321',
        role: RoleUser.Teacher,
    },
    {
        id: 5,
        name: 'Profissional teste',
        username: 'RA123456',
        password: '142536',
        role: RoleUser.Worker,
    },
];
