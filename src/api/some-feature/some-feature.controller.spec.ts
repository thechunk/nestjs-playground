import { Test, TestingModule } from '@nestjs/testing';
import { SomeFeatureController } from './some-feature.controller';

describe('SomeFeatureController', () => {
  let controller: SomeFeatureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SomeFeatureController],
    }).compile();

    controller = module.get<SomeFeatureController>(SomeFeatureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
