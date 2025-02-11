import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('country')
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  countryCode: string;

  @Column()
  name: string;
    
  constructor(country: Partial<Country>) {
    Object.assign(this, country);
  }
}
