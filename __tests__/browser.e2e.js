test('should be cool', async () => {
  await page.goto('http://localhost:3000');

  expect(await page.title()).toBe('React App');
});
