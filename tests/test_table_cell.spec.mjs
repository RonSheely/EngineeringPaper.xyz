import { test, expect } from '@playwright/test';
import { compareImages } from './utility.mjs';

// number of digits of accuracy after decimal point for .toBeCloseTo() calls
const precision = 13; 

test('Test table types in math cells', async ({ page }) => {

  await page.goto('/');

  await page.locator('div.bx--modal-container').waitFor();
  await page.keyboard.press('Escape');
  await page.locator('#new-sheet').click();

  // Only number in math cell should generate a syntax error
  await page.locator('textarea').nth(0).type('3');
  await page.locator('#add-math-cell').click();
  await page.locator('textarea').nth(1).type('1.0');
  let content = await page.locator('.bx--tooltip__trigger span').nth(0).textContent();
  expect(content).toBe('This field must contain an assignment (e.g., x=y*z) or a query (e.g., x=). To delete an unwanted math cell, click the trash can on the right.');
  content = await page.locator('.bx--tooltip__trigger span').nth(1).textContent();
  expect(content).toBe('This field must contain an assignment (e.g., x=y*z) or a query (e.g., x=). To delete an unwanted math cell, click the trash can on the right.');

  // Only units in math cell should generate a syntax error
  await page.locator('#add-math-cell').click();
  await page.locator('textarea').nth(2).type('[inches]');
  content = await page.locator('.bx--tooltip__trigger span').nth(2).textContent();
  expect(content).toBe('This field must contain an assignment (e.g., x=y*z) or a query (e.g., x=). To delete an unwanted math cell, click the trash can on the right.');

  // Only parameter in a math cell should generate a syntax error
  await page.locator('#add-math-cell').click();
  await page.locator('textarea').nth(3).type('a');
  await page.locator('#add-math-cell').click();
  await page.locator('textarea').nth(4).type('aa');
  await page.locator('#add-math-cell').click();
  await page.locator('textarea').nth(5).type('a_b');
  content = await page.locator('.bx--tooltip__trigger span').nth(3).textContent();
  expect(content).toBe('This field must contain an assignment (e.g., x=y*z) or a query (e.g., x=). To delete an unwanted math cell, click the trash can on the right.');
  content = await page.locator('.bx--tooltip__trigger span').nth(4).textContent();
  expect(content).toBe('This field must contain an assignment (e.g., x=y*z) or a query (e.g., x=). To delete an unwanted math cell, click the trash can on the right.');
  content = await page.locator('.bx--tooltip__trigger span').nth(5).textContent();
  expect(content).toBe('This field must contain an assignment (e.g., x=y*z) or a query (e.g., x=). To delete an unwanted math cell, click the trash can on the right.');

});


test('Test parameter name error messages', async ({ page, browserName }) => {
  test.skip(browserName === "webkit", "Webkit not working with attribute selector.");

  await page.goto('/');

  await page.locator('div.bx--modal-container').waitFor();
  await page.keyboard.press('Escape');
  await page.locator('#new-sheet').click();
  await page.click('#delete-0');

  await page.locator('#add-table-cell').click();
  await page.locator('#add-col-0').click();

  await page.locator('#parameter-name-0-0 .mq-editable-field').click();
  for (let i=0; i<5; i++) {
    await page.keyboard.press('Backspace');
  }
  for (let i=0; i<5; i++) {
    await page.keyboard.press('Delete');
  }
  await page.locator('#parameter-name-0-0 textarea').type('1');
  let content = await page.locator('#parameter-name-0-0 span[slot="tooltipText"]').textContent();
  expect(content).toBe('A variable name is required in this field.');

  await page.locator('#parameter-name-0-0 .mq-editable-field').dblclick();
  await page.locator('#parameter-name-0-0 textarea').type('a');

  await page.locator('#parameter-name-0-1 .mq-editable-field').dblclick();
  await page.locator('#parameter-name-0-1 textarea').type('a=b');
  content = await page.locator('#parameter-name-0-1 span[slot="tooltipText"]').textContent();
  expect(content).toBe('A variable name is required in this field.');

  await page.locator('#parameter-name-0-1 .mq-editable-field').dblclick();
  await page.locator('#parameter-name-0-1 textarea').type('b');

  await page.locator('#parameter-name-0-2 .mq-editable-field').dblclick();
  await page.locator('#parameter-name-0-2 textarea').type('a=');
  content = await page.locator('#parameter-name-0-2 span[slot="tooltipText"]').textContent();
  expect(content).toBe('A variable name is required in this field.');

});


test('Test parameter units error messages', async ({ page, browserName }) => {

  test.skip(browserName === "webkit", "Webkit not working with attribute selector.");

  await page.goto('/');

  await page.locator('div.bx--modal-container').waitFor();
  await page.keyboard.press('Escape');
  await page.locator('#new-sheet').click();
  await page.click('#delete-0');

  await page.locator('#add-table-cell').click();
  await page.locator('#add-col-0').click();

  await page.locator('#parameter-units-0-0 textarea').type('1');
  let content = await page.locator('#parameter-units-0-0 span[slot="tooltipText"]').textContent();
  expect(content).toBe('This field may only contain units in square brackets or may be left blank to indicate no units.');

  await page.locator('#parameter-units-0-0 .mq-editable-field').dblclick();
  await page.locator('#parameter-units-0-0 textarea').type('[m]');

  await page.locator('#parameter-units-0-1 .mq-editable-field').dblclick();
  await page.locator('#parameter-units-0-1 textarea').type('a=b');
  content = await page.locator('#parameter-units-0-1 span[slot="tooltipText"]').textContent();
  expect(content).toBe('This field may only contain units in square brackets or may be left blank to indicate no units.');

  await page.locator('#parameter-units-0-1 .mq-editable-field').dblclick();
  await page.locator('#parameter-units-0-1 textarea').type('b');

  await page.locator('#parameter-units-0-2 .mq-editable-field').dblclick();
  await page.locator('#parameter-units-0-2 textarea').type('a=');
  content = await page.locator('#parameter-units-0-2 span[slot="tooltipText"]').textContent();
  expect(content).toBe('This field may only contain units in square brackets or may be left blank to indicate no units.');
  
});


test('Test table cell error messages', async ({ page, browserName }) => {

  test.skip(browserName === "webkit", "Webkit not working with attribute selector.");

  await page.goto('/');

  await page.locator('div.bx--modal-container').waitFor();
  await page.keyboard.press('Escape');
  await page.locator('#new-sheet').click();
  await page.click('#delete-0');

  await page.locator('#add-table-cell').click();
  await page.locator('#add-col-0').click();

  await page.locator('#parameter-units-0-0 textarea').type('[in]');
  await page.locator('#parameter-units-0-1 textarea').type('[m]');

  await page.locator('#grid-cell-0-0-0 textarea').type('a');
  await page.locator('#grid-cell-0-0-1 textarea').type('b=c');
  await page.locator('#grid-cell-0-0-2 textarea').type('c=');

  await page.locator('#grid-cell-0-1-0 textarea').type('1[in]');
  await page.locator('#grid-cell-0-1-1 textarea').type('2');
  await page.locator('#grid-cell-0-1-2 textarea').type('[in]');


  let content = await page.locator('#grid-cell-0-0-0 span[slot="tooltipText"]').textContent();
  expect(content).toBe('This field may only contain a number since units are specified for this column.');

  content = await page.locator('#grid-cell-0-0-1 span[slot="tooltipText"]').textContent();
  expect(content).toBe('This field may only contain a number since units are specified for this column.');

  content = await page.locator('#grid-cell-0-0-2 span[slot="tooltipText"]').textContent();
  expect(content).toBe('This field may only contain a valid expression or number without an equals sign or it may be blank.');


  content = await page.locator('#grid-cell-0-1-0 span[slot="tooltipText"]').textContent();
  expect(content).toBe('This field may only contain a number since units are specified for this column.');

  await expect(() => page.locator('#grid-cell-0-1-1 span[slot="tooltipText"]').textContent({timeout: 10}))
         .rejects.toThrow('Timeout');

  content = await page.locator('#grid-cell-0-1-2 span[slot="tooltipText"]').textContent();
  expect(content).toBe('This field may only contain a valid expression or number without an equals sign or it may be blank.');


  await page.locator('#parameter-units-0-0 .mq-editable-field').dblclick();
  await page.locator('#parameter-units-0-0 textarea').type(' ');

  await expect(() => page.locator('#grid-cell-0-0-0 span[slot="tooltipText"]').textContent({timeout: 10}))
          .rejects.toThrow('Timeout');
  await expect(() => page.locator('#grid-cell-0-1-0 span[slot="tooltipText"]').textContent({timeout: 10}))
         .rejects.toThrow('Timeout');
  
  await page.locator('#grid-cell-0-0-1 .mq-editable-field').dblclick();
  await page.locator('#grid-cell-0-0-1 textarea').type(' ');
  await expect(() => page.locator('#grid-cell-0-0-1 span[slot="tooltipText"]').textContent({timeout: 10}))
          .rejects.toThrow('Timeout');

});


test('Test table cell functionality', async ({ page, browserName }) => {

  page.setLatex = async function (cellIndex, latex) {
    await this.evaluate(([cellIndex, latex]) => window.setCellLatex(cellIndex, latex), 
                        [cellIndex, latex]);
  }

  await page.goto('/');

  const width = 1300;
  const height = 2000;
  await page.setViewportSize({ width: width, height: height });

  await page.locator('div.bx--modal-container').waitFor();
  await page.keyboard.press('Escape');
  await page.locator('#new-sheet').click();

  // Change title
  await page.click('text=New Sheet', { clickCount: 3 });
  await page.type('text=New Sheet', 'Title for testing purposes only, will be deleted from database automatically');

  await page.setLatex(0, 'a_1=');
  await page.click('#add-math-cell');
  await page.setLatex(1, 'alpha=');

  await page.click('#add-table-cell');

  for (let i = 0; i<4; i++) {
    await page.locator('#parameter-name-2-0 textarea').press('Backspace');
  }
  await page.locator('#parameter-name-2-0 textarea').type('a_1');
  
  for (let i = 0; i<4; i++) {
    await page.locator('#parameter-name-2-1 textarea').press('Backspace');
  }
  await page.locator('#parameter-name-2-1 textarea').type('alpha');

  await page.locator('#parameter-units-2-0 textarea').type('[mm]');

  await page.locator('#grid-cell-2-0-0 textarea').type('1000');
  await page.keyboard.press('Enter');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.type('mu');

  await page.locator('#row-label-2-0').click({clickCount: 3});
  await page.locator('#row-label-2-0').type('Row One');

  await page.locator('#row-label-2-1').click({clickCount: 3});
  await page.locator('#row-label-2-1').type('Row Two');

  await page.locator('#add-row-docs-2').click();

  await page.locator('.ql-editor').type('1: one');

  await page.click('#add-math-cell');
  await page.setLatex(3, 'c=');

  await page.click('#add-math-cell');
  await page.setLatex(4, 'd=');

  await page.waitForSelector('.status-footer', { state: 'detached', timeout: 100000 });
  let content = await page.locator('#result-value-0').textContent();
  expect(parseFloat(content)).toBeCloseTo(1, precision);
  content = await page.locator('#result-units-0').textContent();
  expect(content).toBe('m');

  content = await page.locator('#result-value-1').textContent();
  expect(content).toBe('\\alpha');

  content = await page.locator('#result-value-3').textContent();
  expect(content).toBe('c');

  content = await page.locator('#result-value-4').textContent();
  expect(content).toBe('d');

  // select second row and verify results update
  await page.locator('#row-radio-2-1').check();
  await page.locator('.ql-editor').type('2: two');

  content = await page.locator('#result-value-0').textContent();
  expect(content).toBe('a_{1}');

  content = await page.locator('#result-value-1').textContent();
  expect(content).toBe('\\mu');

  content = await page.locator('#result-value-3').textContent();
  expect(content).toBe('c');

  content = await page.locator('#result-value-4').textContent();
  expect(content).toBe('d');

  // add a third row using Enter key
  await page.locator('#grid-cell-2-1-0 textarea').press('Enter');

  await page.keyboard.press('Tab');
  await page.keyboard.type('1');
  await page.keyboard.press('Tab');
  await page.keyboard.type('2000[mm]');

  await page.locator('#row-radio-2-2').check();
  await page.locator('.ql-editor').type('3: three');

  await page.locator('text=Updating...').waitFor({state: 'detached'});

  content = await page.locator('#result-value-0').textContent();
  expect(parseFloat(content)).toBeCloseTo(.001, precision);
  content = await page.locator('#result-units-0').textContent();
  expect(content).toBe('m');

  content = await page.locator('#result-value-1').textContent();
  expect(parseFloat(content)).toBeCloseTo(2, precision);
  content = await page.locator('#result-units-1').textContent();
  expect(content).toBe('m');

  content = await page.locator('#result-value-3').textContent();
  expect(content).toBe('c');

  content = await page.locator('#result-value-4').textContent();
  expect(content).toBe('d');

  // add third and fourth columns
  await page.locator('#add-col-2').click();
  for (let i = 0; i<4; i++) {
    await page.locator('#parameter-name-2-2 textarea').press('Backspace');
  }
  await page.locator('#parameter-name-2-2 textarea').type('c');

  await page.locator('#add-col-2').click();
  for (let i = 0; i<4; i++) {
    await page.locator('#parameter-name-2-3 textarea').press('Backspace');
  }
  await page.locator('#parameter-name-2-3 textarea').type('d');

  await page.locator('#grid-cell-2-2-2 textarea').type('z');
  await page.locator('#grid-cell-2-1-3 textarea').type('3');

  await page.locator('text=Updating...').waitFor({state: 'detached'});

  content = await page.locator('#result-value-0').textContent();
  expect(parseFloat(content)).toBeCloseTo(.001, precision);
  content = await page.locator('#result-units-0').textContent();
  expect(content).toBe('m');

  content = await page.locator('#result-value-1').textContent();
  expect(parseFloat(content)).toBeCloseTo(2, precision);
  content = await page.locator('#result-units-1').textContent();
  expect(content).toBe('m');

  content = await page.locator('#result-value-3').textContent();
  expect(content).toBe('z');

  content = await page.locator('#result-value-4').textContent();
  expect(content).toBe('d');

  // switch back to second row
  await page.locator('#row-radio-2-1').check();

  await page.locator('text=Updating...').waitFor({state: 'detached'});

  content = await page.locator('#result-value-0').textContent();
  expect(content).toBe('a_{1}');

  content = await page.locator('#result-value-1').textContent();
  expect(content).toBe('\\mu');

  content = await page.locator('#result-value-3').textContent();
  expect(content).toBe('c');

  content = await page.locator('#result-value-4').textContent();
  expect(content).toBe('3');

  await page.locator('text=2: two').waitFor({state: 'attached'});


  // save to database and create a screenshot
  await page.click('#upload-sheet');
  await page.click('text=Confirm');
  await page.waitForSelector('#shareable-link');
  const sheetUrl = new URL(await page.$eval('#shareable-link', el => el.value));

  await page.click('[aria-label="Close the modal"]');
  await page.mouse.move(0,0);
  await page.keyboard.press('Escape');
  await page.waitForTimeout(1000);
  await page.evaluate(() => window.scrollTo(0, 0));

  await page.screenshot({ path: `./tests/images/${browserName}_table_screenshot.png`, fullPage: true });

  // clear contents, we'll be creating a new sheet
  await page.locator('#new-sheet').click();

  // retrieve previously saved document from database and check screenshot
  await page.goto(`${sheetUrl.pathname}`);
  await page.waitForSelector('.status-footer', { state: 'detached', timeout: 100000 });
  await page.mouse.move(0,0);
  await page.keyboard.press('Escape');
  await page.waitForTimeout(1000);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path: `./tests/images/${browserName}_table_screenshot_check.png`, fullPage: true });

  expect(compareImages(`${browserName}_table_screenshot.png`, `${browserName}_table_screenshot_check.png`)).toEqual(0);

  // switch to row 3
  await page.locator('#row-radio-2-2').check();

  // test the functionality to hide unselected table rows
  await page.locator('#hide-unselected-rows-2').click();
  
  // results should still be the same as before
  await page.locator('text=Updating...').waitFor({state: 'detached'});

  content = await page.locator('#result-value-0').textContent();
  expect(parseFloat(content)).toBeCloseTo(.001, precision);
  content = await page.locator('#result-units-0').textContent();
  expect(content).toBe('m');

  content = await page.locator('#result-value-1').textContent();
  expect(parseFloat(content)).toBeCloseTo(2, precision);
  content = await page.locator('#result-units-1').textContent();
  expect(content).toBe('m');

  content = await page.locator('#result-value-3').textContent();
  expect(content).toBe('z');

  content = await page.locator('#result-value-4').textContent();
  expect(content).toBe('d');

  await page.locator('text=3: three').waitFor({state: 'attached'});

  // make sure row one is no longer visible
  await expect(() => page.locator('#row-radio-2-0').check({timeout: 10}))
         .rejects.toThrow('Timeout');
  

  // save to database with unselected rows hidden and make sure it returns the same
  await page.click('#upload-sheet');
  await page.click('text=Confirm');
  await page.waitForSelector('#shareable-link');
  const sheetUrl2 = new URL(await page.$eval('#shareable-link', el => el.value));

  await page.click('[aria-label="Close the modal"]');
  await page.keyboard.press('Escape');
  await page.waitForTimeout(1000);
  await page.evaluate(() => window.scrollTo(0, 0));

  await page.screenshot({ path: `./tests/images/${browserName}_table_screenshot2.png`, fullPage: true });

  // retrieve previously saved document from database and check screenshot
  await page.goto(`${sheetUrl2.pathname}`);

  await page.waitForSelector('.status-footer', { state: 'detached', timeout: 100000 });
  await page.keyboard.press('Escape');
  await page.waitForTimeout(1000);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path: `./tests/images/${browserName}_table_screenshot2_check.png`, fullPage: true });

  expect(compareImages(`${browserName}_table_screenshot2.png`, `${browserName}_table_screenshot2_check.png`)).toEqual(0);


  // show all rows again and makesure screenshot matches original
  await page.locator('#show-all-rows-2').click();
  await page.waitForSelector('.status-footer', { state: 'detached', timeout: 100000 });
  
  // switch back to row 2
  await page.locator('#row-radio-2-1').check();

  // results should still be the same as before
  content = await page.locator('#result-value-0').textContent();
  expect(content).toBe('a_{1}');

  content = await page.locator('#result-value-1').textContent();
  expect(content).toBe('\\mu');

  content = await page.locator('#result-value-3').textContent();
  expect(content).toBe('c');

  content = await page.locator('#result-value-4').textContent();
  expect(content).toBe('3');

  await page.locator('text=2: two').waitFor({state: 'attached'});

  // take new screenshot, should match first screenshot
  // makes sure no data was lost when hiding rows, saving to database, and retrieving from database
  await page.mouse.move(0,0);
  await page.keyboard.press('Escape');
  await page.waitForTimeout(1000);
  await page.evaluate(() => window.scrollTo(0, 0));

  await page.screenshot({ path: `./tests/images/${browserName}_table_screenshot3.png`, fullPage: true });

  expect(compareImages(`${browserName}_table_screenshot.png`, `${browserName}_table_screenshot3.png`)).toEqual(0);


  // delete 2nd row
  await page.locator('#delete-row-2-1').click();

  await page.locator('text=Updating...').waitFor({state: 'detached'});
  content = await page.locator('#result-value-0').textContent();
  expect(parseFloat(content)).toBeCloseTo(1, precision);
  content = await page.locator('#result-units-0').textContent();
  expect(content).toBe('m');

  content = await page.locator('#result-value-1').textContent();
  expect(content).toBe('\\alpha');

  content = await page.locator('#result-value-3').textContent();
  expect(content).toBe('c');

  content = await page.locator('#result-value-4').textContent();
  expect(content).toBe('d');

  await page.locator('text=1: one').waitFor({state: 'attached'});

  // delete first column and switch to last row
  await page.locator('#delete-col-2-0').click();
  
  await page.locator('#row-radio-2-1').check();

  content = await page.locator('#result-value-0').textContent();
  expect(content).toBe('a_{1}');

  await page.locator('text=Updating...').waitFor({state: 'detached'});
  content = await page.locator('#result-value-1').textContent();
  expect(parseFloat(content)).toBeCloseTo(2, precision);
  content = await page.locator('#result-units-1').textContent();
  expect(content).toBe('m');

  content = await page.locator('#result-value-3').textContent();
  expect(content).toBe('z');

  content = await page.locator('#result-value-4').textContent();
  expect(content).toBe('d');

  await page.locator('text=3: three').waitFor({state: 'attached'});

  // make sure negative numbers can be entered for columns with units
  await page.locator('#parameter-units-2-0 textarea').type('[mm]');
  await page.locator('#grid-cell-2-1-0 .mq-editable-field').dblclick();
  await page.locator('#grid-cell-2-1-0 textarea').type('-2e3');

  await page.locator('text=Updating...').waitFor({state: 'detached'});
  content = await page.locator('#result-value-1').textContent();
  expect(parseFloat(content)).toBeCloseTo(-2, precision);
  content = await page.locator('#result-units-1').textContent();
  expect(content).toBe('m');
});


test('Test fix for crash when last column deleted', async ({ page }) => {

  await page.goto('/');

  await page.locator('div.bx--modal-container').waitFor();
  await page.keyboard.press('Escape');
  await page.locator('#new-sheet').click();

  await page.locator('textarea').nth(0).type('Var2=');

  await page.locator('#add-table-cell').click();

  await page.locator('#grid-cell-1-0-0 textarea').type('1');
  await page.locator('#grid-cell-1-0-1 textarea').type('2');

  await page.locator('text=Updating...').waitFor({state: 'detached'});
  let content = await page.locator('#result-value-0').textContent();
  expect(parseFloat(content)).toBeCloseTo(2, precision);

  // delete last column and make sure result updates
  await page.locator('#delete-col-1-1').click();

  // make sure second column is no longer visible (prevents regression for a previous bug)
  await page.locator('#parameter-units-1-1').waitFor({state: 'detached', timeout: 100});

  await page.locator('text=Updating...').waitFor({state: 'detached'});
  content = await page.locator('#result-value-0').textContent();
  expect(content).toBe('Var_{2}');
});