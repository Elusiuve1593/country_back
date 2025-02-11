import { Module } from '@nestjs/common';
import { HealthCheckController } from './app.controller';
import { HealthCheckService } from './app.service';
import { DatabaseConfigureModule } from './db/db-config.module';
import { CountryModule } from './countries/countries.module';

@Module({
  imports: [DatabaseConfigureModule, CountryModule],
  controllers: [HealthCheckController],
  providers: [HealthCheckService],
})
export class AppModule {}
