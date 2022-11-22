import Actions from '../utils/actions';

class LoginPage {
  public get emailInput() {
    return $('#email');
  }

  public get passwordInput() {
    return $('#password');
  }

  public get loginButton() {
    return $('.Supper-button');
  }

  public get errorMessage() {
    return $('.error');
  }

  public get errorEmailInputMessage() {
    return $('.SpFieldError .text');
  }

  public async login(email: string, password: string) {
    await browser.url(`${process.env.SUPERPHONE_URL}`);
    await Actions.typeIn(this.emailInput, email);
    await Actions.typeIn(this.passwordInput, password);
    await Actions.clickOn(this.loginButton);
  }
}

export default new LoginPage();
