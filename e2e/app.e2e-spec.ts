import { Ng2FormsTutorialPage } from './app.po';

describe('ng2-forms-tutorial App', function() {
  let page: Ng2FormsTutorialPage;

  beforeEach(() => {
    page = new Ng2FormsTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
