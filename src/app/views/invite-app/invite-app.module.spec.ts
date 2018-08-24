import { InviteAppModule } from './invite-app.module';

describe('InviteAppModule', () => {
  let inviteAppModule: InviteAppModule;

  beforeEach(() => {
    inviteAppModule = new InviteAppModule();
  });

  it('should create an instance', () => {
    expect(inviteAppModule).toBeTruthy();
  });
});
