import type { PhotoKey } from "@/data/photos"
import type { ProductId } from "@/data/products"

const productNames: Record<ProductId, string> = {
  mel: "Miel de mil flores",
  polen: "Polen fresco",
  propoleo: "Propóleo",
}

const productDescriptions: Record<ProductId, string> = {
  mel: "De mil flores: silva, castaño, eucalipto y lo que va floreciendo en el monte según la época. El castaño le pone el fondo intenso y la silva el lado más suave y afrutado. Densa, de final largo y nada empalagosa. Cada cosecha sale un poco distinta, según lo que haya florecido ese año.",
  polen: "Recogido en la propia entrada de la colmena y congelado para que no pierda propiedades.",
  propoleo: "La resina con la que la abeja sella y protege la colmena, en extracto.",
}

const photoAlts: Record<PhotoKey, string> = {
  colmenarPrado: "Colmenas en un prado con el bosque gallego al fondo",
  tarros: "Tarros de miel de distintos tamaños, llenos y cerrados",
  cuadroAbejas: "Cuadro de la colmena cubierto de abejas durante una revisión",
  cuadroOperculado: "Cuadro de miel operculada sujeto con la mano, mitad sellada con cera",
  colmenasBosque: "Fila de colmenas al abrigo del bosque",
  cuadroTaller: "Cuadro de miel operculada sobre el banco del obrador",
}

export const es = {
  meta: {
    homeTitle: "Miel cruda de cosecha propia",
    homeDescription:
      "Miel cruda sin filtrar ni pasteurizar, de nuestras propias colmenas en Galicia. Tarros de 1 kg, 500 g y 300 g. Venta directa con envío por Correos o recogida en mano.",
    productsTitle: "Productos y precios",
    productsDescription:
      "Miel cruda de mil flores de silva, castaño y eucalipto, en tarros de 1 kg, 500 g y 300 g. Precios de venta directa del productor, con envío por Correos.",
    contactTitle: "Contacto",
    contactDescription:
      "Escríbenos por WhatsApp o email. Te la mandamos por Correos o la recoges en mano.",
  },
  nav: {
    home: "Inicio",
    products: "Productos",
    contact: "Contacto",
    skipToContent: "Saltar al contenido",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    language: "Idioma",
  },
  hero: {
    eyebrow: "Apicultura familiar",
    title: "Miel cruda del bosque gallego",
    subtitle:
      "Cosecha propia, sin pasteurizar ni mezclar. La misma que comemos en casa, en tarros de 1 kg, 500 g y 300 g.",
    seeProducts: "Ver miel y precios",
    contactUs: "Escríbenos",
  },
  values: {
    title: "Por qué sabe distinta",
    items: [
      {
        title: "Cruda y sin filtrar",
        body: "Solo la dejamos decantar. No la calentamos, así conserva el polen, las enzimas y el aroma que la miel industrial pierde por el camino.",
      },
      {
        title: "De un solo colmenar",
        body: "No compramos ni mezclamos miel de terceros. Todo lo que vendemos ha salido de nuestras colmenas.",
      },
      {
        title: "Cosecha limitada",
        body: "Retiramos lo que las abejas nos dejan sin forzar la colmena. Cuando se acaba, toca esperar a la próxima.",
      },
      {
        title: "Trato directo",
        body: "Sin intermediarios ni pasarela de pago. Nos escribes, acordamos el pago y si te la mandamos o la recoges, y listo.",
      },
    ],
  },
  products: {
    title: "Nuestra miel",
    intro:
      "Precio de venta directa del productor, sin gastos de tienda por medio. El envío, si lo necesitas, va aparte.",
    perKilo: "el kilo",
    plannedBadge: "Próximamente",
    availableBadge: "Disponible",
    names: productNames,
    descriptions: productDescriptions,
  },
  order: {
    title: "Monta tu pedido",
    intro:
      "Elige los tarros que quieras y te preparamos el mensaje. Lo revisas antes de enviarlo y cerramos por WhatsApp o email.",
    increase: "Añadir uno más",
    decrease: "Quitar uno",
    quantityFor: "Tarros de",
    total: "Total",
    shippingNote: "Los tarros, sin el envío.",
    jarCount: "tarros",
    empty: "Añade algún tarro y te preparo el mensaje.",
    sendWhatsapp: "Enviar por WhatsApp",
    sendEmail: "Enviar por email",
    preview: "Esto es lo que se enviará",
    greeting: "¡Hola! Quería encargar:",
    emailSubject: "Pedido de miel",
    reset: "Empezar de nuevo",
  },
  story: {
    title: "Unas pocas colmenas y mucho monte",
    body: [
      "BARRIOMEL no es una empresa: son unas colmenas en un prado, al lado del bosque, y el trabajo de cuidarlas todo el año para sacar la miel de un par de cosechas.",
      "Las abejas trabajan en un radio de unos tres kilómetros, y por aquí lo que hay es silva, castaño, eucalipto y monte. De ahí sale el sabor fuerte, que no se parece nada al de la miel de supermercado.",
      "Por eso la vendemos de tú a tú: la cantidad es la que es, y preferimos que sepas de dónde viene lo que te comes.",
    ],
  },
  process: {
    title: "De la colmena al tarro",
    steps: [
      {
        title: "Se revisa la colmena",
        body: "En temporada abrimos cada colmena cada pocas semanas para comprobar tres cosas: que la reina esté poniendo, que no les falte comida y que no estén enfermas.",
      },
      {
        title: "Se cata cuando está lista",
        body: "Retiramos solo los cuadros operculados, los que la abeja ya ha sellado con cera porque la miel está en su punto de humedad.",
      },
      {
        title: "Se extrae en frío",
        body: "Desoperculamos a mano, extraemos con centrifugadora y dejamos decantar por gravedad. Ni un grado de calor.",
      },
      {
        title: "Se envasa y sale",
        body: "Al tarro directamente desde el decantador, y de ahí a tu casa. Sin almacén ni meses de estantería.",
      },
    ],
  },
  gallery: {
    title: "El colmenar",
    intro: "Fotos de la temporada, hechas donde trabajan las abejas.",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        question: "¿Hacéis envíos?",
        answer:
          "Sí, por Correos. Los portes los paga el comprador y dependen del peso del paquete, así que te decimos el importe exacto antes de cerrar el pedido. Si estás por la zona, también puedes recogerla en mano y te lo ahorras.",
      },
      {
        question: "Se me ha puesto dura, ¿está mala?",
        answer:
          "Al contrario, es buena señal: la miel cruda cristaliza sola con el tiempo y el frío. Si la quieres líquida otra vez, mete el tarro al baño maría sin pasar de 40 grados. Nunca al microondas.",
      },
      {
        question: "¿Puedo llevarme varios kilos?",
        answer:
          "Sí. Para cantidades grandes escríbenos antes, porque la cosecha es limitada y conviene reservar.",
      },
      {
        question: "¿Siempre sabe igual?",
        answer:
          "No, y es normal. Cada cosecha depende de lo que haya florecido ese año, así que el color y el sabor cambian un poco de una a otra.",
      },
    ],
  },
  contact: {
    title: "Escríbenos y lo cerramos",
    intro:
      "No hay carrito ni pago online: la venta es directa. Nos escribes por donde te resulte más cómodo, y te la mandamos por Correos o la recoges en mano, como te venga mejor.",
    whatsapp: "WhatsApp",
    whatsappHint: "Lo más rápido, normalmente contestamos el mismo día.",
    email: "Email",
    emailHint: "Para pedidos grandes o si prefieres dejarlo por escrito.",
    instagram: "Instagram",
    instagramHint: "Fotos de la temporada y aviso cuando hay cosecha nueva.",
    where: "Dónde estamos",
    whereHint: "Recogida en mano por la zona, o envío por Correos a donde estés.",
    registry: "Registro del colmenar",
    defaultMessage: "¡Hola! Os escribo desde la web, quería preguntar por la miel.",
  },
  footer: {
    tagline: "Miel cruda de cosecha propia",
    rights: "Todos los derechos reservados",
    madeIn: "Hecho en Galicia",
  },
  photoAlts,
}

export type Dictionary = typeof es
