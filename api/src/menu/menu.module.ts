import { MenuService } from './menu.service';
import { Module } from '@nestjs/common';
import { MenuController } from './menu.controller';
import { SnackService } from 'src/snack/snack.service';
import { IngredientsService } from 'src/ingredients/ingredients.service';

@Module({
    imports: [],
    providers: [MenuService, SnackService, IngredientsService],
    controllers: [MenuController],
})
export class MenuModule {}
