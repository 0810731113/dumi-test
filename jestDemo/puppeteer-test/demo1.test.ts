const timeout = 5000;

describe(
  '/ (Home Page)',
  () => {
    let page;
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage();
      await page.goto('https://baidu.com');
    }, timeout);

    it('should load without error', async () => {
      const text = await page.evaluate(() => document.head.textContent);
      expect(text).toContain('百度一下，你就知道');
    });
  },
  timeout,
);
