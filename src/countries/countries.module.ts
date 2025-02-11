import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from './entity/county.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Country ])],
  controllers: [],
  providers: [],
})
export class CountryModule {}