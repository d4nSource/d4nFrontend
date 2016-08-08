import { D4nSmartFEPage } from './app.po';

describe('d4n-smart-fe App', function() {
  let page: D4nSmartFEPage;

  beforeEach(() => {
    page = new D4nSmartFEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('d4n works!');
  });
});
