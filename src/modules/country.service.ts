import { HttpException, Injectable } from '@nestjs/common';
import { CountryPopulation } from './interfaces/country-population.interface';
import { CountryInterface } from './interfaces/country.interface';
import { CountryBorders } from './interfaces/country-borders.interface';
import { ConfigService } from '@nestjs/config';
import { CountryFlag } from './interfaces/country-flag.interface';
import axios from 'axios';
import {
  AVALIABLE_COUNTRIES,
  COUNTRY_INFO,
  FLAG,
  POPULATION,
} from 'src/constants';

@Injectable()
export class CountryService {
  constructor(private readonly configService: ConfigService) {}

  async getCountries(): Promise<CountryInterface[]> {
    try {
      const countries = await axios.get<CountryInterface[]>(
        this.configService.get<string>('API_NAGER') + AVALIABLE_COUNTRIES,
      );
      return countries.data;
    } catch (err) {
      throw new HttpException('Fetching error', 500);
    }
  }

  async getBordersCountry(countryCode: string): Promise<CountryBorders[]> {
    try {
      const bordersCountry = await axios.get<CountryBorders[]>(
        this.configService.get<string>('API_NAGER') +
          COUNTRY_INFO +
          countryCode,
      );
      return bordersCountry.data;
    } catch (err) {
      throw new HttpException('Fetching error', 500);
    }
  }

  async singleConutryFlag(iso2: string): Promise<CountryFlag> {
    try {
      const oneContryFlag = await axios.post<CountryFlag>(
        this.configService.get<string>('API_COUNTRIESNOW') + FLAG,
        { iso2 },
      );
      return oneContryFlag.data;
    } catch (err) {
      throw new HttpException('Fetching error', 500);
    }
  }

  async singleConutryPopulation(country: string): Promise<CountryPopulation> {
    try {
      const oneContryPopulation = await axios.post<CountryPopulation>(
        this.configService.get<string>('API_COUNTRIESNOW') + POPULATION,
        { country },
      );
      return oneContryPopulation.data;
    } catch (err) {
      throw new HttpException('Fetching error', 500);
    }
  }
}
