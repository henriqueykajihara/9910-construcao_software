import { Test, TestingModule } from '@nestjs/testing';
import { HistoryControllerController } from './history.controller.controller';

describe('HistoryControllerController', () => {
  let controller: HistoryControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistoryControllerController],
    }).compile();

    controller = module.get<HistoryControllerController>(HistoryControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
