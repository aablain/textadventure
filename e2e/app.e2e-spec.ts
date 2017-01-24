import { TextadventurePage } from './app.po';

describe('textadventure App', function() {
  let page: TextadventurePage;

  beforeEach(() => {
    page = new TextadventurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
