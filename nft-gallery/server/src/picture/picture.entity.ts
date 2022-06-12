import { Entity, PrimaryColumn, Column } from 'typeorm';

import { TABLE_NAMES } from '../config/contants/table-names';

@Entity({ name: TABLE_NAMES.PICTURES })
export class Picture {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  url: string;

  @Column()
  price: number;
}
