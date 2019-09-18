import { AppPage, AdminPage } from './app.po';
import { browser, logging, by, element } from 'protractor';


describe('workspace-project App', () => {
  let page: AppPage;
  let adminpg: AdminPage;

  beforeEach(() => {
    page = new AppPage();
    adminpg = new AdminPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to SOW Tracker Tool.');
  });

  it('should display Text on Button', () => {
    adminpg.navigateToAdmin();
    expect(adminpg.getTitleText()).toEqual('+');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
