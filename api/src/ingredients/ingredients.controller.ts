import {
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Body,
} from '@nestjs/common';
import { Ingredient, IngredientsService } from './ingredients.service';

@Controller('ingredient')
export class IngredientsController {
    constructor(private ingredientsService: IngredientsService) {}

    @Get('/:id')
    async getById(
        @Param('id', new ParseIntPipe()) id: number,
    ): Promise<Ingredient> {
        return await this.ingredientsService.getById(id);
    }

    @Get()
    async getAll(): Promise<Ingredient[]> {
        return await this.ingredientsService.getAll();
    }

    @Post()
    async create(@Body() { name }: { name: string }): Promise<Ingredient> {
        return await this.ingredientsService.create(name);
    }

    @Delete('/:id')
    async delete(
        @Param('id', new ParseIntPipe()) id: number,
    ): Promise<boolean> {
        return await this.ingredientsService.delete(id);
    }
}
