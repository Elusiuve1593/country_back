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

  async getBordersCountry(): Promise<CountryBorders[]> {
    try {
      const bordersCountry = await axios.get<CountryBorders[]>(
        this.configService.get<string>('API_NAGER') + COUNTRY_INFO,
      );
      return bordersCountry.data;
    } catch (err) {
      throw new HttpException('Fetching error', 500);
    }
  }

  async getPopulation(): Promise<CountryPopulation[]> {
    try {
      const countryPopulation = await axios.get<CountryPopulation[]>(
        this.configService.get<string>('API_COUNTRIESNOW') + POPULATION,
      );
      return countryPopulation.data;
    } catch (err) {
      throw new HttpException('Fetching error', 500);
    }
  }

  async getCountryFlag(): Promise<CountryFlag[]> {
    try {
      const countryFlag = await axios.get<CountryFlag[]>(
        this.configService.get<string>('API_COUNTRIESNOW') + FLAG,
      );
      return countryFlag.data;
    } catch (err) {
      throw new HttpException('Fetching error', 500);
    }
  }
}
