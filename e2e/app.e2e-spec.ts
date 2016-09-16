import { D4nSmartFePage } from './app.po';

describe('d4n-smart-fe App', function() {
  let page: D4nSmartFePage;

  beforeEach(() => {
    page = new D4nSmartFePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
