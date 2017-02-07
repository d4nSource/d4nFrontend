import { browser, element, by } from 'protractor';

export class D4nSmarthomePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
