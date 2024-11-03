import { Controller, Get } from '@nestjs/common';
import { SomeServiceService } from '../../core/some-service/some-service.service';

@Controller('some-feature')
export class SomeFeatureController {
  constructor(private readonly someService: SomeServiceService) {}

  @Get()
  getHello(): string {
    return this.someService.getHello();
  }
}
