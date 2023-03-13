import { Injectable } from '@nestjs/common';
import { TypeUser, User, UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService) {}

    async validate(
        username: string,
        password: string,
        type: TypeUser,
    ): Promise<User> {
        const user = await this.userService.findUserByUsername(username, type);

        return user?.password === password ? user : null;
    }
}
