# 💻 iTech · E-commerce de tecnología

Tienda online de tecnología desarrollada con **React** y **Vite**. Los productos, las categorías y las órdenes de compra se guardan en **Firebase (Firestore)**, que funciona como base de datos del proyecto. La interfaz está hecha con **Tailwind CSS y daisyUI**.

Proyecto final del curso de **React** (Coderhouse).

🔗 **Demo:** `https://it-tech-store.vercel.app/`


## ✨ Funcionalidades

- Catálogo de productos cargado desde Firestore
- Cinco categorías de productos: notebooks, celulares, tablets, cámaras y accesorios, con menú desplegable y filtrado por categoría
- Vista de detalle de cada producto, con indicador de stock
- Selector de cantidad en el detalle de cada producto
- Carrito de compras con estado global (Context API): agregar productos, sumar o restar unidades, eliminar un producto y vaciar el carrito
- Si el producto ya estaba en el carrito, se suma la cantidad en lugar de duplicarlo
- El carrito se guarda en `localStorage`, así que no se pierde al recargar la página
- Total del pedido y contador de productos en el ícono del carrito
- Pantalla especial cuando el carrito está vacío, con acceso directo a los productos
- Formulario de checkout con campos obligatorios (nombre, email, teléfono, dirección, ciudad y código postal) que genera una orden de compra en Firestore, con los datos del comprador, los productos, el total y la fecha y hora
- Barra de navegación fija que cambia de estilo al hacer scroll y resalta la sección activa
- Scroll automático hacia los productos o hacia "Sobre nosotros"
- Pantallas de carga con *skeletons* mientras llegan los datos
- Notificaciones con react-hot-toast
- Imagen de respaldo cuando una foto no se encuentra
- Footer con enlaces, datos de contacto y mapa de Google Maps
- Diseño responsivo

> ℹ️ Es un proyecto de práctica: al probar el checkout, usá datos de prueba y no información personal real.

## 🛠️ Tecnologías

| Área | Herramientas |
|------|--------------|
| Frontend | React 19, Vite 7, React Router 7 |
| Estilos | Tailwind CSS 4, daisyUI 5 |
| Estado | Context API y `localStorage` |
| Base de datos | Firebase / Firestore |
| Interfaz | react-hot-toast, react-icons, lucide-react, Framer Motion |
| Calidad de código | ESLint |

## 🗺️ Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Inicio: banner, todos los productos y "Sobre nosotros" |
| `/category/:id` | Productos de una categoría |
| `/item/:id` | Detalle de un producto |
| `/cart` | Carrito de compras |

## 📁 Estructura del proyecto

```
iTechStore/
├── public/
│   └── images/            # Fotos de los productos (acc-01.jpg, cel-01.jpg...)
├── src/
│   ├── assets/            # Logo y banner
│   ├── componentes/
│   │   ├── context/       # CartContext y CartProvider (carrito global)
│   │   ├── NavbarContainer.jsx / Navbar.jsx
│   │   ├── ItemListContainer.jsx / ItemList.jsx / Item.jsx
│   │   ├── ItemDetailContainer.jsx / ItemDetail.jsx / ItemCounter.jsx
│   │   ├── CartContainer.jsx / CartItem.jsx / CartWidget.jsx
│   │   ├── CheckOutForm.jsx
│   │   ├── AboutUs.jsx
│   │   ├── Footer.jsx
│   │   └── Skeleton.jsx
│   ├── firebase/
│   │   ├── config.js      # Inicialización de Firebase
│   │   └── db.js          # Funciones de acceso a Firestore
│   ├── App.jsx
│   ├── ScrollTop.jsx
│   └── main.jsx
└── package.json
```

## 🔥 Base de datos (Firestore)

La app usa tres colecciones:

| Colección | Contenido |
|-----------|-----------|
| `items` | Los productos |
| `categories` | Las categorías del menú |
| `orders` | Las órdenes de compra generadas |

### Estructura de un producto (`items`)

| Campo | Tipo | Ejemplo |
|-------|------|---------|
| `name` | string | `"Mouse inalámbrico Logitech M170"` |
| `description` | string | `"Conexión inalámbrica de 2,4 GHz..."` |
| `price` | number | `18000` |
| `stock` | number | `40` |
| `category` | string | `"Accesorios"` |
| `url` | string | `"/images/acc-02.jpg"` |

> El campo `category` debe ser **idéntico** al `name` de la categoría, porque el menú navega a `/category/<name>` y el filtro compara ese texto.

### Funciones de acceso a datos (`db.js`)

- `getProducts()`: trae todos los productos
- `getProductsByCategory(category)`: filtra por categoría
- `getDetail(id)`: trae un producto por su id
- `getCategories()`: trae las categorías del menú
- `createOrder(user, item, total)`: guarda una orden con `serverTimestamp()`

### Imágenes

Las fotos no se guardan en Firebase. Cada producto guarda en `url` la **ruta** de su imagen, y el archivo vive en `public/images/` con ese mismo nombre. Si el archivo falta, la tarjeta muestra una imagen de respaldo.

### Reglas de seguridad recomendadas

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    match /items/{itemId} {
      allow read: if true;
      allow write: if false;
    }

    match /categories/{categoryId} {
      allow read: if true;
      allow write: if false;
    }

    match /orders/{orderId} {
      allow create: if true;
      allow read, update, delete: if false;
    }

  }
}
```

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
3. Creá un proyecto en la [consola de Firebase](https://console.firebase.google.com/), activá **Firestore Database** y copiá la configuración de tu app web.
4. Creá un archivo `.env` en la raíz con tus datos:
   ```env
   VITE_FIREBASE_API_KEY=tu_api_key
   VITE_FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=tu_project_id
   VITE_FIREBASE_STORAGE_BUCKET=tu_proyecto.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
   VITE_FIREBASE_APP_ID=tu_app_id
   ```
   > Ajustá los nombres a los que uses en `src/firebase/config.js`.
5. Cargá categorías y productos en Firestore con la estructura de la sección anterior, y copiá las fotos a `public/images/`.
6. Iniciá el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   La app queda disponible en `http://localhost:5173`.

> ⚠️ No subas tu archivo `.env` al repositorio.

## 📜 Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo con HMR |
| `npm run build` | Genera la versión de producción en `dist/` |
| `npm run preview` | Previsualiza la build de producción |
| `npm run lint` | Ejecuta ESLint sobre el proyecto |

## 🌐 Despliegue

La app está pensada para publicarse en **Vercel** o **Netlify**. Al configurarla, cargá en el panel del sitio las mismas variables `VITE_...` de tu `.env`, porque ese archivo no se sube a GitHub.

## 👩‍💻 Autora

**Belén Ampuero**
[LinkedIn](https://www.linkedin.com/in/belén-ampuero-625047308) · [GitHub](https://github.com/BelenAmpuero)
