import { Injectable } from '@nestjs/common';
import {
    Ingredient,
    IngredientsService,
} from 'src/ingredients/ingredients.service';

export interface Snack {
    id?: number;
    name: string;
    description: string;
    ingredientsId: number[];
    status: number;
    ingredients?: Ingredient[];
}

@Injectable()
export class SnackService {
    private snacks: Snack[];
    private idAtual = 1;

    constructor(private ingredientsService: IngredientsService) {
        this.snacks = [];
    }

    async getAll(): Promise<Snack[]> {
        return this.snacks.filter((snack) => snack.status === 1);
    }

    async getById(id: number): Promise<Snack> {
        return this.snacks.find(
            (snack) => snack.id === id && snack.status === 1,
        );
    }

    async create({
        name,
        description,
        ingredientsId,
    }: {
        name: string;
        description: string;
        ingredientsId: number[];
    }): Promise<Snack> {
        const newSnack: Snack = {
            id: this.idAtual,
            name,
            description,
            ingredientsId,
            status: 1,
            ingredients: await this.getIngredients(ingredientsId),
        };

        this.snacks.push(newSnack);
        return newSnack;
    }

    async edit(
        id: number,
        { description, ingredientsId, name, status }: Snack,
    ): Promise<Snack> {
        const index = this.snacks.findIndex(
            (snack) => snack.id === id && snack.status === 1,
        );

        if (index >= 0) {
            this.snacks[index] = {
                id,
                description,
                ingredientsId,
                name,
                status,
                ingredients: await this.getIngredients(ingredientsId),
            };

            return this.snacks[index];
        }

        return null;
    }

    async delete(id: number): Promise<boolean> {
        const index = this.snacks.findIndex(
            (snack) => snack.id === id && snack.status === 1,
        );

        if (index >= 0) {
            this.snacks[index].status = 2;
        }

        return true;
    }

    private async getIngredients(
        ingredientsId: number[],
    ): Promise<Ingredient[]> {
        let ingredients: Ingredient[] = [];
        for (const ingredientId of ingredientsId) {
            ingredients = [
                ...ingredients,
                await this.ingredientsService.getById(ingredientId),
            ];
        }

        return ingredients;
    }
}
