import markdownToHtml from '../markdownToHtml';

describe('markdownToHtml', () => {
  test('converts markdown to html', async () => {
    const markdown = '# heading\nparagraph';
    const html = await markdownToHtml(markdown);
    expect(html).toMatch(/<h1>heading<\/h1>\n<p>paragraph<\/p>/);
  });
});
