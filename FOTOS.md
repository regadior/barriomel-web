# Fotos de la web

Las fotos viven en `src/assets/photos/`. Para cambiar una, **sobrescribe el fichero con el
mismo nombre** y reconstruye: Astro reoptimiza y regenera los tamaños solo.

Ahora mismo están puestas las 6 fotos que ya tenías en el repo. Abajo, por cada hueco, qué
foto conviene y cómo sacarla mejor cuando tengas un rato.

## Consejos que valen para todas

- **Luz natural, nunca flash.** El flash sobre cristal da un reflejo blanco que arruina el
  tarro. Mejor a la sombra, o en un día nublado (en Galicia vas sobrado).
- **Móvil en horizontal para las anchas y vertical para las altas.** Respeta la orientación
  que pide cada hueco o se recortará por donde no quieres.
- **Limpia el fondo.** Es lo que más diferencia una foto casera de una de catálogo: quita
  bolsas, plásticos, cables y calendarios del encuadre.
- **No uses zoom digital.** Acércate tú.
- **Toca el tarro en la pantalla antes de disparar** para que el móvil enfoque y exponga ahí.

---

## 1. `colmenar-prado.jpg` — portada (hero)

**Dónde sale:** la primera pantalla de la web, a todo el ancho, con un degradado oscuro
encima y el título en blanco sobre ella.

**Orientación:** horizontal (3:2), lo más ancha posible. Mínimo 1600 px de ancho.

**Qué buscar:** las colmenas en su sitio con el bosque detrás, que se entienda de un
vistazo que esto es campo gallego y no un polígono. La que tienes ya funciona.

**Cómo mejorarla:** a primera o última hora, con luz cálida y de lado. Agáchate a la altura
de las piñeras para que las colmenas se vean grandes y el bosque quede al fondo. Deja el
tercio superior con cielo o árboles: ahí va a caer el titular, así que cuanto menos
detalle, mejor se lee.

## 2. `tarros.jpg` — producto

**Dónde sale:** la ficha de la miel, en la página de productos. Es **la foto que vende**, la
que mira alguien decidiendo si te escribe.

**Orientación:** horizontal (4:3).

**Qué buscar:** los tres tamaños que vendes (1 kg, 500 g y 300 g) juntos, de mayor a menor.
La que tienes vale, pero se ve casera: sale la pared naranja y el mantel de cuadros.

**Cómo mejorarla** (es la que más gana, si solo repites una, repite esta):
- Tres tarros, no dieciocho. Uno de cada tamaño.
- Fondo liso y claro: una tabla de madera, un paño de lino, un papel blanco grande curvado
  por detrás. Nada de calendarios ni azulejos.
- **Luz de ventana desde detrás o desde el lado**, nunca de frente. Esto es lo más importante
  de toda la lista: la miel es translúcida, así que si la luz la atraviesa se enciende y se ve
  su color real. De frente sale opaca y mucho más oscura de lo que es — de hecho es lo que
  pasa en la foto que tienes ahora, que la hace parecer casi negra.
- Cámara a la altura de los tarros, no desde arriba.
- Con las etiquetas puestas y bien rectas, y el cristal sin huellas ni goterones.
- Un cuadro de miel o unas flores secas al lado dan contexto, pero que no tapen los tarros.

## 3. `cuadro-operculado.jpg` — proceso

**Dónde sale:** al lado de los cuatro pasos de "De la colmena al tarro", en vertical y
grande.

**Orientación:** vertical (3:4).

**Qué buscar:** un cuadro sellado con cera en la mano, que se vea la textura de los
opérculos. La que tienes es de las mejores que hay en el repo, con la mitad blanca sellada
y la mitad ámbar.

**Cómo mejorarla:** sácala a contraluz suave, en la puerta del obradoiro o fuera. Si la luz
entra por detrás del cuadro, la cera se vuelve casi translúcida y queda espectacular. Que
no salgan las herramientas colgadas del fondo.

## 4. `cuadro-abejas.jpg` — la historia

**Dónde sale:** en la sección oscura de "Unhas poucas colmeas e moito monte", junto al texto
en crema.

**Orientación:** vertical (3:4).

**Qué buscar:** un cuadro con abejas encima, en plena revisión. Transmite que hay alguien
trabajando de verdad. La que tienes cumple perfectamente.

**Cómo mejorarla:** que se vea una mano con guante sujetando el cuadro. Las manos en una
foto de producto artesanal valen mucho: cuentan que detrás hay una persona.

## 5. `colmenas-bosque.jpg` — galería

**Dónde sale:** primera de las cuatro miniaturas de la galería.

**Orientación:** vertical (3:4).

⚠️ **Ojo con esta:** en la que tienes ahora se lee el **número de registro de tu colmenar**
en la tapa metálica. No es un secreto (va obligatoriamente a la vista), pero que sepas que
queda legible en la web. Si prefieres que no salga, cambia el ángulo o usa otra foto. Si te
da igual, incluso puedes ponerlo a propósito: en `src/data/site.ts` hay un campo
`hiveRegistry` que lo enseña en el pie de página, y en venta directa da confianza.

## 6. `cuadro-taller.jpg` — galería

**Dónde sale:** segunda miniatura de la galería.

**Orientación:** vertical (3:4). La que tienes es horizontal, así que se recorta por los
lados.

**Cómo mejorarla:** repítela en vertical y con el fondo despejado (ahora sale el tablero
perforado y las herramientas). El cuadro llenando el encuadre.

---

## Fotos que aún no existen

Cuando empieces con el polen y el propóleo hará falta una foto de cada uno. Guárdalas en
`src/assets/photos/` como `polen.jpg` y `propoleo.jpg`, en **horizontal 4:3** para que
encajen en la misma ficha que la miel, y dímelo: hay que añadirlas al registro de
`src/data/photos.ts` y su texto alternativo a los dos diccionarios.

## Fotos descartadas

`7.jpg` (el cuadro dentro de la caja de plástico transparente) no la he usado: el plástico
se come toda la foto y compite con el cuadro. Sigue en el historial de git si la quieres
recuperar.
