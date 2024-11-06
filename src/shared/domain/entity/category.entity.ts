import { Column, Entity, PrimaryColumn } from 'typeorm';
import { GenericEntity } from './generic.entity';

@Entity({ name: 'categories' })
export class CategoryEntity extends GenericEntity {
    @PrimaryColumn({type: 'char', length: 36})
    categoryId: string;
    @Column({type: 'varchar', nullable: false, unique: true, length: 100})
    name: string;
    @Column({type: 'text', nullable: true})
    description: string;
}
