# 💻 ITECH · E-commerce en React

Aplicación web de e-commerce desarrollada con **React** y **Vite**. Usa **Firebase (Firestore)** como base de datos para simular un backend real, y **Tailwind CSS con daisyUI** para una interfaz responsiva y moderna.

Proyecto final de **React** (Coderhouse).

🔗 **Demo:** `[completar enlace del deploy]`

## ✨ Funcionalidades

> Revisá esta lista y dejá solo lo que tu app realmente hace.

- Catálogo de productos cargado desde Firestore
- Navegación entre páginas con React Router `[inicio, detalle de producto, carrito, checkout]`
- Filtro de productos por categoría `[si lo tiene]`
- Carrito de compras `[agregar, quitar y calcular el total]`
- Generación de órdenes de compra guardadas en Firestore `[si lo tiene]`
- Notificaciones al usuario con react-hot-toast
- Modo claro y oscuro con next-themes `[si lo tiene]`
- Animaciones con Framer Motion
- Diseño responsivo

## 🛠️ Tecnologías

**Frontend**
- React 19
- Vite 7
- React Router 7
- Tailwind CSS 4 + daisyUI 5
- Framer Motion
- Emotion
- React Icons y Lucide React
- React Hot Toast
- next-themes

**Base de datos**
- Firebase / Firestore

**Calidad de código**
- ESLint

## 🚀 Instalación

1. Cloná el repositorio:
   ```bash
   git clone https://github.com/BelenAmpuero/[nombre-del-repo].git
   cd [nombre-del-repo]
   ```
2. Instalá las dependencias:
   ```bash
   npm install
   ```
3. Configurá Firebase (ver la sección siguiente).
4. Iniciá el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   La app queda disponible en `http://localhost:5173`.

## 🔥 Configuración de Firebase

1. Creá un proyecto en la [consola de Firebase](https://console.firebase.google.com/).
2. Agregá una **app web** y copiá los datos de configuración.
3. Activá **Firestore Database**.
4. Creá un archivo `.env` en la raíz del proyecto:
   ```env
   VITE_FIREBASE_API_KEY=tu_api_key
   VITE_FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=tu_project_id
   VITE_FIREBASE_STORAGE_BUCKET=tu_proyecto.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
   VITE_FIREBASE_APP_ID=tu_app_id
   ```
   > Ajustá los nombres a los que uses en tu archivo de configuración de Firebase.
5. Cargá los productos en la colección `[nombre de la colección]` de Firestore.

> ⚠️ No subas tu archivo `.env` al repositorio. Verificá que esté en el `.gitignore`.

## 📜 Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo con HMR |
| `npm run build` | Genera la versión de producción en `dist/` |
| `npm run preview` | Previsualiza la build de producción |
| `npm run lint` | Ejecuta ESLint sobre el proyecto |

## 📁 Estructura del proyecto

```
src/
├── components/    # Componentes reutilizables
├── pages/         # Páginas de la aplicación
├── context/       # Estado global (carrito, tema)
├── firebase/      # Configuración de Firebase
├── App.jsx
└── main.jsx
```

> Reemplazá este árbol por tu estructura real.

## 👩‍💻 Autora

**Belén Ampuero**
[LinkedIn](https://www.linkedin.com/in/belén-ampuero-625047308) · [GitHub](https://github.com/BelenAmpuero)
