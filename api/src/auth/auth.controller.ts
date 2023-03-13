import { Controller, Post } from '@nestjs/common';
import { User } from 'src/users/users.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post()
    async login(username: string, password: string): Promise<User> {
        return await this.authService.validate(username, password);
    }
}
