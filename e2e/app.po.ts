export class D4nSmartFEPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('d4n-root h1')).getText();
  }
}
