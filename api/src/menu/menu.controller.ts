import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    Query,
} from '@nestjs/common';
import { Menu, MenuService } from './menu.service';

@Controller('menu')
export class MenuController {
    constructor(private menuService: MenuService) {}

    @Get()
    async getWeeklyMenu() {
        return await this.menuService.getWeeklyMenu();
    }

    @Get('/fromdate')
    async getFromDate(@Query('date') dateString: string) {
        const date: Date = new Date(dateString);

        return await this.menuService.getMenuFromDate(date);
    }

    @Get('/:id')
    async getFromId(@Param('id', new ParseIntPipe()) id: number) {
        return await this.menuService.getMenuFromId(id);
    }

    @Post()
    async create(
        @Body()
        {
            date,
            ticketQuantityUsed,
            snackId,
            status,
        }: {
            date: string | Date;
            ticketQuantityUsed: number;
            snackId: number;
            status: number;
        },
    ) {
        return await this.menuService.createNewMenu({
            date,
            ticketQuantityUsed,
            snackId,
            status,
        });
    }

    @Put('/:id')
    async edit(
        @Param('id', new ParseIntPipe()) id: number,
        @Body() newMenu: Menu,
    ) {
        return await this.menuService.editMenu(id, newMenu);
    }

    @Delete('/:id')
    async delete(@Param('id', new ParseIntPipe()) id: number) {
        return await this.menuService.deleteMenu(id);
    }
}
