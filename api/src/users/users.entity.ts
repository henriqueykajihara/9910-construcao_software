import { RoleUser } from 'src/enums/role.enum';

export class UsersEntity {
    id: number;
    name: string;
    username: string;
    password: string;
    role: RoleUser.Student;
}
