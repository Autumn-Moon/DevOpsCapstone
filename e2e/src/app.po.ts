import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-stat-bflogin h1')).getText() as Promise<string>;
  }
}

export class AdminPage {
  navigateToAdmin() {
    return browser.get('/admin') as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-projectlanding button.form-btn')).getText() as Promise<string>;
  }
}
