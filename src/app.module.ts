import { Module } from '@nestjs/common';
import { HealthCheckController } from './app.controller';
import { HealthCheckService } from './app.service';
import { CountryModule } from './modules/country.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), CountryModule],
  controllers: [HealthCheckController],
  providers: [HealthCheckService],
})
export class AppModule {}
