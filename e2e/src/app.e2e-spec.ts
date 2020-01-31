import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('', () => {
    
  });
  it('should display welcome message', () => {
    browser.driver.manage().window().maximize();
    page.navigateTo();
    browser.driver.manage().window().maximize();
    let name = element(by.id('userName'));
    let email = element(by.id('userEmail'));
    let subject = element(by.id('subject'));
    let message = element(by.id('message'));
    let button = element(by.buttonText('Submit'));

    name.sendKeys('Hello');
    browser.sleep(1000);
    email.sendKeys('Hello@hello.com');
    browser.sleep(1000);
    subject.sendKeys('Contact us');
    browser.sleep(1000);
    message.sendKeys('Hello there, I am writing you to meet.');
    browser.sleep(1000);
    button.click();
    browser.sleep(2000);

    // page.navigateTo();
    // expect(page.getTitleText()).toEqual('contact app is running!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
