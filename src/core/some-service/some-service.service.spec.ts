import { Test, TestingModule } from '@nestjs/testing';
import { SomeServiceService } from './some-service.service';

describe('SomeServiceService', () => {
  let service: SomeServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SomeServiceService],
    }).compile();

    service = module.get<SomeServiceService>(SomeServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
