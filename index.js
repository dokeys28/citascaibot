const { chromium } = require("playwright");

(async () => {
  // 1. Abrir el navegador
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // 2. Ir a tu página web
  await page.goto("https://citascai.vercel.app/");

  // 3. Realizar el clic (usa el selector de tu botón)
  // Puedes usar IDs como '#miBoton' o textos como 'text=Enviar'
  await page.click("#whatsapp");

  console.log("Botón presionado con éxito a las: " + new Date().toISOString());

  // 4. Cerrar
  await browser.close();
})();
