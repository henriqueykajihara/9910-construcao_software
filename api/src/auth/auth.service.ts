import { Injectable } from '@nestjs/common';
import { User, UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService) {}

    async validate(username: string, password: string): Promise<User> {
        const user = await this.userService.findUserByUsername(username);

        return user?.password === password ? user : null;
    }
}
