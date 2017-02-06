import { D4nFePage } from './app.po';

describe('d4n-fe App', function() {
  let page: D4nFePage;

  beforeEach(() => {
    page = new D4nFePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
