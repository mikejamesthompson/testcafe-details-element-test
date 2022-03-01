import { t, Selector } from 'testcafe';

fixture`Details element content visibility tests`
  .page`http://localhost:8000/index.html`

test('Content is hidden', async () => {
  await t
    .expect(Selector('details li').filterVisible().count)
      .eql(0, "Details element content unexpectedly visible")
});
