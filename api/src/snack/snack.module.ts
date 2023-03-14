import { SnackService } from './snack.service';
import { SnackController } from './snack.controller';
import { Module } from '@nestjs/common';
import { IngredientsService } from 'src/ingredients/ingredients.service';

@Module({
    imports: [],
    controllers: [SnackController],
    providers: [SnackService, IngredientsService],
})
export class SnackModule {}
