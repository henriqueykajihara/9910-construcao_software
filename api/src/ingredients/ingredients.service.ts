import { Injectable } from '@nestjs/common';

export interface Ingredient {
    id: number;
    name: string;
    status: number;
}

@Injectable()
export class IngredientsService {
    private ingredients: Ingredient[];
    private idAtual = 1;

    constructor() {
        this.ingredients = [];
    }

    async getAll(): Promise<Ingredient[]> {
        return this.ingredients.filter((ingredient) => ingredient.status === 1);
    }

    async getById(id: number): Promise<Ingredient> {
        console.log(this.ingredients);
        return this.ingredients.find(
            (ingredient) => ingredient.id === id && ingredient.status === 1,
        );
    }

    async create(name: string) {
        const newIngredient = {
            name,
            id: this.idAtual,
            status: 1,
        };
        this.idAtual++;
        this.ingredients = [...this.ingredients, newIngredient];

        return newIngredient;
    }

    async delete(id: number): Promise<boolean> {
        const ingredientIndex = this.ingredients.findIndex(
            (ingredient) => ingredient.id === id,
        );

        if (ingredientIndex >= 0) {
            this.ingredients[ingredientIndex].status = 2;
        }

        return true;
    }
}
