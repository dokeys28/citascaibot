const { chromium } = require("playwright");

(async () => {
  // 1. Lanzamos con 'headless: false' para ver la acción
  // 'slowMo' nos ayuda a ver qué pasa paso a paso
  const browser = await chromium.launch({ headless: true, slowMo: 500 });
  const page = await browser.newPage();

  try {
    await page.goto("https://citascai.vercel.app/", {
      waitUntil: "networkidle", // Espera a que no haya tráfico de red
    });

    // 2. Esperar a que el selector esté realmente en el DOM
    await page.waitForSelector("#whatsapp");

    // 3. Hacer clic
    await page.click("#whatsapp");

    console.log(
      "Botón presionado con éxito a las: " + new Date().toISOString(),
    );

    // 4. Pausa de seguridad para ver el resultado antes de cerrar
    await page.waitForTimeout(15000);
  } catch (error) {
    console.error("Error al intentar hacer clic:", error);
  } finally {
    await browser.close();
  }
})();
