import { SnackModule } from './snack/snack.module';
import { HistoryModule } from './history/history.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { MenuModule } from './menu/menu.module';
import { TransactionsModule } from './transactions/transactions.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './users/roles.guard';

@Module({
    imports: [
        SnackModule,
        AuthModule,
        HistoryModule,
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'uniticketDB',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
        }),
        IngredientsModule,
        MenuModule,
        TransactionsModule,
    ],
    controllers: [AppController],
    providers: [
        {
            provide: APP_GUARD,
            useClass: RolesGuard,
        },
        AppService,
    ],
})
export class AppModule {}
