import { t, Selector } from 'testcafe';

fixture`Details element content visibility tests`
  .page`http://localhost:8000/index.html`

test('Content is hidden', async () => {
  await t
    .expect(Selector('details li').filterVisible().count)
      .eql(0, "Details element content unexpectedly visible")
});

test('Log li properties', async () => {
  const li = Selector('details li');
  console.log(await li.tagName);
  console.log(await li.visible);
  console.log(await li.boundingClientRect);
});