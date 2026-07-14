# 🍽️ Sal y Olivo - Demo Web para Restaurante 🚀

¡Bienvenido al repositorio de **Sal y Olivo**! 

Este proyecto es una **demostración de página web para restaurantes** creada y diseñada por **Yelose Tech**. Está construida utilizando las últimas tecnologías web para garantizar una experiencia rápida, moderna y 100% responsiva (adaptable a cualquier pantalla de forma fluida).

🌐 **¡Mira la web en vivo aquí!** 👉 [https://yelose.github.io/yelosetech-restaurante-demo/](https://yelose.github.io/yelosetech-restaurante-demo/)

---

## 🛠️ Tecnologías utilizadas

*   **Framework:** Angular 20 (usando Signals y tipado estricto).
*   **Estilos:** SCSS con una arquitectura basada en CSS Grid fluido y variables nativas. Cero dependencias de frameworks CSS pesados.
*   **Despliegue automatizado:** GitHub Pages.

---

## 📏 Guía de Arquitectura Frontend - Yelose Tech

Para que el proyecto sea escalable, rápido y mantenible, en esta empresa seguimos un conjunto de reglas de arquitectura muy estrictas. Olvida los tutoriales clásicos de Angular: aquí hacemos las cosas de forma limpia, moderna y orientada a componentes 100% aislados.

### 1. La Regla de Oro: HTML 100% Semántico (Cero Clases)
*   En Yelose Tech **no usamos clases CSS** en nuestras plantillas HTML. 
*   Nuestro HTML debe leerse como un documento perfecto. 
*   Esto favorece el SEO, la accesibilidad (lectores de pantalla) y nos obliga a estructurar la información lógicamente. 
*   Si un componente necesita un comportamiento visual especial que se repite, usamos **Directivas de Angular** en lugar de clases CSS.

### 2. Prohibido usar `margin`
*   El uso de la propiedad `margin` está **terminantemente prohibido**. 
*   Los componentes deben ser agnósticos a su entorno; un botón no debe empujar a los elementos que tiene a su alrededor.
*   El espaciado hacia adentro se logra con `padding`.
*   El espaciado hacia afuera (Aires) es responsabilidad del contenedor PADRE. 
*   Usaremos SIEMPRE `display: flex;` o `display: grid;` en el contenedor padre y aplicaremos separación con la propiedad `gap`.

### 3. Tipografía Fluida
*   Nuestra web no da "saltos" en diferentes tamaños de pantalla usando `@media` queries para las fuentes. 
*   El tamaño base está definido en el body mediante un `clamp()` en nuestro archivo global.
*   A la hora de maquetar textos dentro de un componente, se usará SIEMPRE la unidad `em`. Así, la fuente hereda la fluidez del elemento raíz y todo el diseño crece o encoge proporcionalmente.

### 4. Encapsulación de Angular (El selector `:host`)
*   Los estilos de un componente **solo** afectan a ese componente. 
*   Para darle la estructura y el layout a vuestro componente, usad el selector `:host` en vuestro archivo SCSS. Es el equivalente a darle estilos a la "caja fuerte" que envuelve vuestro HTML.

### 5. Angular Moderno y Firebase
*   **Standalone Components:** No veréis archivos `app.module.ts`. Cada componente es independiente e importa solo lo que necesita.
*   **Control de Flujo:** Olvidaos de `*ngIf` y `*ngFor`. Usamos la sintaxis moderna integrada en la plantilla: `@if (condicion) { ... }` y `@for (item of items; track item.id) { ... }`.
*   **Base de datos:** Importaremos las funciones directamente del **SDK nativo de Firebase** (`firebase/firestore`).

### 6. Flujo de Trabajo en Git
1.  **Nunca** se escribe código directamente en la rama `main`.
2.  Cada vez que cojáis una tarea nueva, partiendo **SIEMPRE de la rama `dev`** (nunca de `main`), cread una rama: `feature/nombre-de-vuestra-tarea`.
3.  Cuando terminéis, subís la rama y abrís una **Pull Request (PR)**. Se revisará, se comentarán mejoras y cuando esté perfecta, se unirá al proyecto principal.

---

## 🚀 Cómo actualizar la web en GitHub Pages

Publicar actualizaciones en la web en vivo es absurda y maravillosamente fácil gracias a `angular-cli-ghpages`. **No necesitas hacer el build a mano.**

Cuando quieras subir una nueva versión, sigue estos pasos:

1. Guarda tus cambios locales en Git (`git add .` y `git commit -m "Tus cambios"`).
2. Sube tus cambios a la rama principal (`git push origin main`).
3. Ejecuta el comando mágico de despliegue:

```bash
ng deploy --base-href=/yelosetech-restaurante-demo/
