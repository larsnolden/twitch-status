import { TwitchStatusPage } from './app.po';

describe('twitch-status App', function() {
  let page: TwitchStatusPage;

  beforeEach(() => {
    page = new TwitchStatusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
