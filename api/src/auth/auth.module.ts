import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
    imports: [UsersModule, PassportModule],
    providers: [AuthService, UsersService, LocalStrategy],
    controllers: [AuthController],
})
export class AuthModule {}
