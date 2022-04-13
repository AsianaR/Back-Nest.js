import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'disciplines' })
export class DisciplineEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
}
