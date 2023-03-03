import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { MenuModule } from './menu/menu.module';
import { TransactionsModule } from './transactions/transactions.module';
import { UsersModule } from './users/users.module';
import { HistoryController } from './history/history.controller';

@Module({
    imports: [
        AuthModule,
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'uniticketDB',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
        }),
        IngredientsModule,
        MenuModule,
        TransactionsModule,
        UsersModule,
    ],
    controllers: [AppController, HistoryController],
    providers: [AppService],
})
export class AppModule {}
