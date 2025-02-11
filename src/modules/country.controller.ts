import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CountryService } from './country.service';

@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  getCountries() {
    return this.countryService.getCountries();
  }

  @Get('/borders/:countryCode')
  getBordersCountry(@Param('countryCode') countryCode: string) {
    return this.countryService.getBordersCountry(countryCode);
  }

  @Post('single-country-flag')
  getSingleConutryFlag(@Body() body: { iso2: string }) {
    return this.countryService.singleConutryFlag(body.iso2);
  }

  @Post('single-country-population')
  getSingleConutryPopulation(@Body() body: { country: string }) {
    return this.countryService.singleConutryPopulation(body.country);
  }
}
