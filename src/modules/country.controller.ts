import { Controller, Get } from '@nestjs/common';
import { CountryService } from './country.service';

@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  getCountries() {
    return this.countryService.getCountries();
  }

  @Get('borders-countries')
  getBordersCountry() {
    return this.countryService.getBordersCountry();
  }

  @Get('population')
  getPopulation() {
    return this.countryService.getPopulation();
  }

  @Get('flag')
  getCountryFlag() {
    return this.countryService.getCountryFlag()
  }
}
