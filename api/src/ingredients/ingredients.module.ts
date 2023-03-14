import { Module } from '@nestjs/common';
import { IngredientsController } from './ingredients.controller';
import { IngredientsService } from './ingredients.service';

@Module({
    providers: [IngredientsService],
    controllers: [IngredientsController],
})
export class IngredientsModule {}
