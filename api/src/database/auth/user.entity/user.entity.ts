import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class UserEnetity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    role: string;

    @Column()
    active: boolean;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updtedAt: string;
}
