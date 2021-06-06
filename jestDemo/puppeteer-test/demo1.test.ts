const timeout = 5000;

describe(
  '/ (Home Page)',
  () => {
    let page;
    let browser;
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage();
      await page.setRequestInterception(true);
      page.on('request', async request => {
        // console.log(`request`);
        // console.log(request.resourceType());
        // console.log(request.url());
        if (request.resourceType() == 'xhr') {
          await request.continue();
        } else if (request.resourceType() == 'image') {
          await request.abort();
        } else {
          await request.continue();
        }
      });
      await page.goto(
        'https://baidu.com',
        // ,{ waitUntil: 'networkidle2' }
      );
    }, timeout);

    it('should load without error', async () => {
      const text = await page.evaluate(() => document.head.textContent);
      expect(text).toContain('百度一下，你就知道');

      // await page.waitFor(1000);
      // await page.waitFor(5000);
    });
    it('button is Exsits', async () => {
      await expect(page).toMatch('#su', { text: '百度一下' });
    });

    it('click-btn_s_ipt', async () => {
      await expect(page).toFill('input#kw', '习近平');
      await expect(page).toClick('input#su');
      await page.waitForTimeout(2000);
      const text = await page.evaluate(() => document.body.textContent);
      await expect(text).toMatch('毕业院校：清华大学');
    });
  },
  timeout,
);
