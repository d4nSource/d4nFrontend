import { D4nSmarthomePage } from './app.po';

describe('d4n-smarthome App', function() {
  let page: D4nSmarthomePage;

  beforeEach(() => {
    page = new D4nSmarthomePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
