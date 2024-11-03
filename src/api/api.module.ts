import { Module } from '@nestjs/common';
import { SomeFeatureController } from './some-feature/some-feature.controller';
import { SomeServiceService } from '../core/some-service/some-service.service';

@Module({
  controllers: [SomeFeatureController],
  providers: [SomeServiceService],
})
export class ApiModule {}
