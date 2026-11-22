import { test, expect } from '@playwright/test';
test('Проверка отображения элементов хедера', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'MCP', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'CLI', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'API' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Node.js' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'GitHub repository' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Discord server' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Switch between dark and light' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Search (Control+k)' })).toBeVisible();
});
test('Проверка названий элементов хедера', async ({ page }) => {
  await page.goto('https://playwright.dev/'); 
  await expect(page.getByRole('navigation', { name: 'Main' }).locator('b')).toContainText('Playwright');
  await expect(page.getByRole('link', { name: 'Docs' })).toContainText('Docs');
  await expect(page.getByRole('link', { name: 'MCP', exact: true })).toContainText('MCP');
  await expect(page.getByRole('link', { name: 'CLI', exact: true })).toContainText('CLI');
  await expect(page.getByRole('link', { name: 'API' })).toContainText('API');
  await expect(page.getByRole('button', { name: 'Node.js' })).toContainText('Node.js');
});
test('Проверка атрибутов href элементов навигации хедера', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.locator('a.navbar__brand')).toHaveAttribute('href', '/');
  await expect(page.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', '/docs/intro');
  await expect(page.getByRole('link', { name: 'MCP', exact: true })).toHaveAttribute('href', '/mcp/introduction');
  await expect(page.getByRole('link', { name: 'CLI', exact: true })).toHaveAttribute('href', '/agent-cli/introduction');
  await expect(page.getByRole('link', { name: 'API' })).toHaveAttribute('href', '/docs/api/class-playwright');
  await expect(page.getByRole('link', { name: 'GitHub repository' })).toHaveAttribute('href', 'https://github.com/microsoft/playwright');
  await expect(page.getByRole('link', { name: 'Discord server' })).toHaveAttribute('href', 
'https://aka.ms/playwright/discord');
});
test('Проверка переключения лайт мода', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByLabel('Switch between dark and light').click();
  await page.getByLabel('Switch between dark and light').click();
  await expect(page.locator('html')).toHaveAttribute('data-theme','dark')
});
