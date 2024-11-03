import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { ApiModule } from './api/api.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [
    ApiModule,
    RouterModule.register([
      {
        path: 'api',
        module: ApiModule,
      },
    ]),
    CoreModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
