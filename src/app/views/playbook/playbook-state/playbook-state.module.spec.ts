import { PlaybookStateModule } from './playbook-state.module';

describe('PlaybookStateModule', () => {
  let playbookStateModule: PlaybookStateModule;

  beforeEach(() => {
    playbookStateModule = new PlaybookStateModule();
  });

  it('should create an instance', () => {
    expect(playbookStateModule).toBeTruthy();
  });
});
