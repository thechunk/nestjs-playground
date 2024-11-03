import { Module } from '@nestjs/common';
import { SomeServiceService } from './some-service/some-service.service';

@Module({
  providers: [SomeServiceService],
})
export class CoreModule {}
