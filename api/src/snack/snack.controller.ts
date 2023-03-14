import {
    Controller,
    Body,
    Get,
    Param,
    Post,
    ParseIntPipe,
    Put,
    Delete,
} from '@nestjs/common';
import { Snack, SnackService } from './snack.service';

@Controller('snack')
export class SnackController {
    constructor(private snackService: SnackService) {}

    @Get()
    async getAll() {
        return await this.snackService.getAll();
    }

    @Get('/:id')
    async getById(@Param('id', new ParseIntPipe()) id: number) {
        return await this.snackService.getById(id);
    }

    @Post()
    async create(
        @Body()
        {
            name,
            description,
            ingredientsId,
        }: {
            name: string;
            description: string;
            ingredientsId: number[];
        },
    ) {
        return await this.snackService.create({
            name,
            description,
            ingredientsId,
        });
    }

    @Put('/:id')
    async edit(
        @Param('id', new ParseIntPipe()) id: number,
        @Body() { description, ingredientsId, name, status }: Snack,
    ) {
        return await this.snackService.edit(id, {
            description,
            ingredientsId,
            name,
            status,
        });
    }

    @Delete('/:id')
    async delete(@Param('id', new ParseIntPipe()) id: number) {
        return await this.snackService.delete(id);
    }
}
