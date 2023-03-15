import { Injectable } from '@nestjs/common';
import { RoleUser, User, UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService) {}

    async validate(
        username: string,
        pass: string,
        role: RoleUser,
    ): Promise<User> {
        const user = await this.userService.findOne(username, role);
        if (user && user.password === pass) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { password, ...result } = user;
            return result;
        }

        return null;
    }
}
