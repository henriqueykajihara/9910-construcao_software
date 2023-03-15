import { Controller, Post, Body } from '@nestjs/common';
import { User } from 'src/users/users.service';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/login')
    async login(@Body() { username, password, role }): Promise<User> {
        return await this.authService.validate(username, password, role);
    }
}
