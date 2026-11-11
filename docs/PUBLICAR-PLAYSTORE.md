# 📱 App para la Play Store — Guía rápida

Este proyecto es una app móvil hecha con **React Native + Expo**, lista para
probar en tu teléfono y, más adelante, publicar en Google Play.

## Estructura de carpetas (dónde está cada cosa)

```
empresa-app/
├── App.js                  → Punto de entrada (no suele tocarse)
├── index.js                → Arranque de Expo (no tocar)
├── app.json                → Nombre, icono, paquete (com.miempresa.app)...
├── package.json            → Dependencias y comandos
├── assets/                 → Iconos y pantalla de carga
│   ├── icon.png            → Icono de la app (1024x1024 recomendado)
│   ├── adaptive-icon.png   → Icono adaptativo Android
│   └── splash-icon.png     → Imagen de arranque
└── src/                    → ⭐ TODO el código de la app vive aquí
    ├── screens/            → Cada pantalla: HomeScreen, ServicesScreen...
    ├── components/         → Piezas reutilizables: Button, Card...
    ├── navigation/         → AppNavigator.js: cómo se navega entre pantallas
    ├── theme/              → Colores, espaciados y tipografía globales
    └── utils/              → api.js: conexión con tu servidor/backend
docs/
└── PUBLICAR-PLAYSTORE.md   → Pasos para subirla a la Play Store
```

## Probar la app en tu teléfono (lo más rápido)

1. Instala la app **Expo Go** desde la Play Store en tu móvil.
2. En el ordenador, dentro de `empresa-app/`:
   ```bash
   npm install
   npx expo start
   ```
3. Asegúrate de que móvil y ordenador están en la **misma red WiFi**.
4. Escanea el código QR que aparece en pantalla con la app Expo Go.

¡Listo! Cada vez que guardes un archivo, la app se actualiza sola.

## ¿Dónde edito qué?

| Quiero...                     | Editar...                                  |
|-------------------------------|--------------------------------------------|
| Cambiar colores/marca         | `src/theme/index.js`                       |
| Cambiar textos de inicio      | `src/screens/HomeScreen.js`                |
| Añadir una pantalla nueva     | Crear archivo en `src/screens/` + registrarla en `src/navigation/AppNavigator.js` |
| Cambiar servicios             | `src/screens/ServicesScreen.js`            |
| Poner mis datos de contacto   | `src/screens/ContactScreen.js`             |
| Conectar con mi servidor      | `src/utils/api.js`                         |
| Nombre e icono de la app      | `app.json` y carpeta `assets/`             |

## Siguiente paso: publicar

Cuando la app esté lista, sigue la guía `docs/PUBLICAR-PLAYSTORE.md`.
