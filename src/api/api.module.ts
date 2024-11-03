import { Module } from '@nestjs/common';
import { CoreModule } from '../core/core.module';
import { SomeFeatureController } from './some-feature/some-feature.controller';
import { SomeServiceService } from '../core/some-service/some-service.service';

@Module({
  imports: [CoreModule],
  controllers: [SomeFeatureController],
  providers: [SomeServiceService],
})
export class ApiModule {}
