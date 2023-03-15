import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RoleUser } from 'src/users/users.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super();
    }

    async validate(
        username: string,
        password: string,
        role: RoleUser,
    ): Promise<any> {
        const user = await this.authService.validate(username, password, role);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
