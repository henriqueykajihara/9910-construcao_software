import {
    Entity,
    Column,
    CreateDateColumn,
    JoinColumn,
    OneToOne,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEnetity } from '../auth/user.entity/user.entity';

@Entity()
export class TransactionsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updtedAt: string;

    @OneToOne(() => UserEnetity, (order) => order.id)
    @JoinColumn()
    user: UserEnetity;
}
