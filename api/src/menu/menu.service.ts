import { Injectable } from '@nestjs/common';
import { Snack, SnackService } from 'src/snack/snack.service';

export interface Menu {
    id?: number;
    date: string | Date;
    ticketQuantityUsed: number;
    snackId: number;
    status: number;
    snack?: any;
}

@Injectable()
export class MenuService {
    private weeklyMenu: Menu[];
    private idAtual = 1;

    constructor(private snackService: SnackService) {
        this.weeklyMenu = [];
    }

    async getWeeklyMenu(): Promise<Menu[]> {
        return this.weeklyMenu.filter((menu) => menu.status === 1);
    }

    async getMenuFromDate(date: Date): Promise<Menu> {
        return this.weeklyMenu.find((menu) => {
            let menuDate: Date;
            if (typeof menu.date === 'string') {
                menuDate = new Date(menu.date);
            } else {
                menuDate = menu.date;
            }

            return menuDate === date && menu.status === 1;
        });
    }

    async getMenuFromId(id: number): Promise<Menu> {
        return this.weeklyMenu.find(
            (menu) => menu.id === id && menu.status === 1,
        );
    }

    async createNewMenu({
        date,
        ticketQuantityUsed,
        snackId,
        status,
    }: {
        date: string | Date;
        ticketQuantityUsed: number;
        snackId: number;
        status: number;
    }): Promise<Menu> {
        const newMenu: Menu = {
            id: this.idAtual,
            date,
            ticketQuantityUsed,
            snackId,
            status,
            snack: await this.getSnack(snackId),
        };

        this.weeklyMenu.push(newMenu);

        this.sortWeeklyMenu();

        return newMenu;
    }

    async editMenu(id: number, newMenu: Menu): Promise<Menu> {
        const index = this.weeklyMenu.findIndex((menu) => menu.id === id);
        if (index >= 0) {
            this.weeklyMenu[index] = newMenu;
            return newMenu;
        }
        return null;
    }

    async deleteMenu(id: number): Promise<boolean> {
        const index = this.weeklyMenu.findIndex((menu) => menu.id === id);

        if (index >= 0) {
            this.weeklyMenu[index].status = 2;
        }

        return true;
    }

    private sortWeeklyMenu(): void {
        this.weeklyMenu = this.weeklyMenu.sort((a, b) => {
            const dateA =
                typeof a.date === 'string' ? new Date(a.date) : a.date;
            const dateB =
                typeof b.date === 'string' ? new Date(b.date) : b.date;

            return dateB.getTime() - dateA.getTime();
        });
    }

    private async getSnack(snackId: number): Promise<Snack> {
        const snack: Snack = await this.snackService.getById(snackId);

        return snack;
    }
}
