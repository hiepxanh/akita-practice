import { InviteAppStateModule } from './invite-app-state.module';

describe('InviteAppStateModule', () => {
  let inviteAppStateModule: InviteAppStateModule;

  beforeEach(() => {
    inviteAppStateModule = new InviteAppStateModule();
  });

  it('should create an instance', () => {
    expect(inviteAppStateModule).toBeTruthy();
  });
});
