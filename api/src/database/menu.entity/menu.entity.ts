import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class IngredientsEnetity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    salad: string;

    @Column()
    main_course: string;

    @Column()
    vegetarian: string;

    @Column()
    first_side_dish: string;

    @Column()
    second_side_dish: string;

    @Column()
    dessert: string;

    @Column()
    day: Date;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updtedAt: string;
}
