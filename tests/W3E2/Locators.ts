import { test, expect } from '@playwright/test';

test('Encontrar campo de texto y botón en UnoSquare', async ({ page }) => {
  // Navegar a la página
  await page.goto('https://www.unosquare.com/');

  // Encontrar el campo de usuario por ID
  const usuario = page.locator('#user-name');

  // Encontrar el botón por ID
  const boton = page.locator('#login-button');

  // Verificar que existen
  await expect(usuario).toBeVisible();
  await expect(boton).toBeVisible();
});
