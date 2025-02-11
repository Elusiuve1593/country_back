import { Controller, Get } from '@nestjs/common';
import { HealthCheckService } from './app.service';

@Controller('health-check')
export class HealthCheckController {
  constructor(private readonly healthCheckService: HealthCheckService) {}

  @Get()
  getHello() {
    return this.healthCheckService.getHello();
  }
}
