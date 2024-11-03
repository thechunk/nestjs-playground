import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { run } from 'good-fences';

async function bootstrap() {
  const fencesResult = await run({});
  if (!!fencesResult.errors.length) {
    fencesResult.errors.forEach((error) => {
      console.error(error.detailedMessage);
    });
    process.exit(1);
    return;
  }

  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
