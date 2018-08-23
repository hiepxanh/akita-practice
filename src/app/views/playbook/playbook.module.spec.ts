import { PlaybookModule } from './playbook.module';

describe('PlaybookModule', () => {
  let playbookModule: PlaybookModule;

  beforeEach(() => {
    playbookModule = new PlaybookModule();
  });

  it('should create an instance', () => {
    expect(playbookModule).toBeTruthy();
  });
});
