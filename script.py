import os
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import time

# Configuración de Chrome para que funcione en GitHub Actions
chrome_options = Options()
chrome_options.add_argument("--headless")
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")

driver = webdriver.Chrome(options=chrome_options)

try:
    # 1. Cambia por la URL de tu página
    driver.get("https://citascai.vercel.app/whatsapp")
    
    # 2. Encuentra el botón (ajusta el selector CSS o ID)
    # Ejemplo: si el botón tiene id="btn-enviar"
    boton = driver.find_element(By.ID, "whatsapp")
    
    boton.click()
    time.sleep(20)
    print("Clic realizado con éxito")

except Exception as e:
    print(f"Error: {e}")

finally:
    driver.quit()