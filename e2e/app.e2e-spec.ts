import { PaymentTrackerPage } from './app.po';

describe('payment-tracker App', () => {
  let page: PaymentTrackerPage;

  beforeEach(() => {
    page = new PaymentTrackerPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
