import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PlaceStatus } from './places-status.enum';

@Entity()
export class Place {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  site: string;

  @Column()
  address: string;

  @Column()
  image: string;

  @Column()
  ticket: string;

  @Column()
  description: string;

  @Column()
  status: PlaceStatus;
}
