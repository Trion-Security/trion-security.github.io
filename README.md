# Trion Security Landing Page

Este repositorio contiene la landing page oficial de **Trion Security**, enfocada en Gobernanza de Identidades Agénticas (Agent Identity Governance) y protección criptográfica para ecosistemas de Inteligencia Artificial Autónoma.

## 🚀 Tecnologías Utilizadas

Esta página web está diseñada para ser extremadamente ligera, rápida y fácil de desplegar, tanto en servidores locales como en integraciones CDN estáticas.

- **Estructura y Comportamiento:** HTML5, CSS3 Variables, JavaScript Vanilla.
- **Diseño Visual:** Custom CSS utilizando el **Friendly Palette** (Soft Purple, Coral Orange y Bright Pink) adaptados a un Dark Mode premium.
- **Micro-interacciones:** Animaciones CSS puras, variables CSS dinámicas e `IntersectionObserver` ligero (sin librerías como jQuery o React).
- **Despliegue:** Preparado nativamente para **Docker** (Nginx) y **GitHub Pages**.

## 📁 Estructura del Proyecto

```text
/
├── index.html                  # Archivo principal de la estructura de la página
├── styles.css                  # Archivo de estilos responsivos y variables CSS
├── script.js                   # Lógica para interactividad y temporizadores ligeros
├── images/                     # Recursos gráficos y assets
│   └── logo2-removebg.png      # Logo de Trion Security transparente
├── Dockerfile                  # Configuración de Nginx alpine para despliegues ligeros
├── docker-compose.yml          # Configuración recomendada para levantar el contenedor local
└── README.md                   # Documentación actual
```

## 🛠️ Ejecución en Desarrollo Local (Docker)

La página se puede desplegar instantáneamente en cualquier entorno local utilizando la configuración de Docker Compose incluida, lo que garantiza que Nginx sirva los archivos estáticos de forma idéntica a un entorno de producción.

1. Asegúrate de tener **Docker** y **Docker Compose** instalados.
2. Abre la terminal en la raíz del proyecto.
3. Ejecuta el siguiente comando para construir la imagen y levantar el servidor:

   ```bash
   docker compose up --build
   ```

4. Abre tu navegador y dirígete a `http://localhost:8080`.
5. Si deseas apagar el servidor, presiona `Ctrl + C` o ejecuta:

   ```bash
   docker compose down
   ```

## 🌐 Despliegue en GitHub Pages (Producción)

Si quieres que este repositorio se cargue directamente de forma gratuita y pública como un dominio:

1. Asegúrate de que tu `index.html` siga estando alojado en la raíz de tu rama principal (ej. `main`).
2. Ve a las **Configuraciones (Settings)** de tu repositorio en GitHub.
3. Selecciona **Pages** en el menú de la izquierda.
4. En **Build and deployment**, la opción Source debe ser **"Deploy from a branch"**.
5. Selecciona tu rama `main` y selecciona la carpeta `/ (root)`.
6. Presiona **Save**.
7. ¡Tras un par de minutos, GitHub generará tu URL pública! (ej: `https://tu-usuario.github.io/tu-repositorio`).

## Datos de Interés (Narrativa Actualizada)
Esta UI incluye la narrativa de negocio modernizada, posicionando la Gobernanza de Identidad Zero-Trust como el servicio principal y relegando PQC a la infraestructura secundaria "bajo la base", de acuerdo con los últimos requisitos de estrategia B2B del equipo.
