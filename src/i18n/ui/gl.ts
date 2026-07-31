import type { PhotoKey } from "@/data/photos"
import type { ProductId } from "@/data/products"
import type { Dictionary } from "@/i18n/ui/es"

const productNames: Record<ProductId, string> = {
  mel: "Mel de mil flores",
  polen: "Pole fresco",
  propoleo: "Própole",
}

const productDescriptions: Record<ProductId, string> = {
  mel: "De mil flores: silva, castiñeiro, eucalipto e o que vai florecendo no monte segundo a época. O castiñeiro póñelle o fondo intenso e a silva o lado máis suave e afroitado. Denso, de final longo e nada empachante. Cada colleita sae un pouco distinta, segundo o que florecese ese ano.",
  polen: "Recollido na propia entrada da colmea e conxelado para que non perda propiedades.",
  propoleo: "A resina coa que a abella sela e protexe a colmea, en extracto.",
}

const photoAlts: Record<PhotoKey, string> = {
  colmenarPrado: "Colmeas nun prado co bosque galego ao fondo",
  tarros: "Tarros de mel de distintos tamaños, cheos e pechados",
  cuadroAbejas: "Cadro da colmea cuberto de abellas durante unha revisión",
  cuadroOperculado: "Cadro de mel operculado suxeito coa man, metade selado con cera",
  colmenasBosque: "Fila de colmeas ao abrigo do bosque",
  cuadroTaller: "Cadro de mel operculado sobre o banco do obradoiro",
}

export const gl: Dictionary = {
  meta: {
    homeTitle: "Mel cru de colleita propia",
    homeDescription:
      "Mel cru sen filtrar nin pasteurizar, das nosas propias colmeas en Galicia. Tarros de 1 kg, 500 g e 300 g. Venda directa con envío por Correos ou recollida en man.",
    productsTitle: "Produtos e prezos",
    productsDescription:
      "Mel cru de mil flores de silva, castiñeiro e eucalipto, en tarros de 1 kg, 500 g e 300 g. Prezos de venda directa do produtor, con envío por Correos.",
    contactTitle: "Contacto",
    contactDescription:
      "Escríbenos por WhatsApp ou correo. Mandámoscho por Correos ou recólleo en man.",
  },
  nav: {
    home: "Inicio",
    products: "Produtos",
    contact: "Contacto",
    skipToContent: "Ir ao contido",
    openMenu: "Abrir menú",
    closeMenu: "Pechar menú",
    language: "Idioma",
  },
  hero: {
    eyebrow: "Apicultura familiar",
    title: "Mel cru do bosque galego",
    subtitle:
      "Colleita propia, sen pasteurizar nin mesturar. O mesmo que comemos na casa, en tarros de 1 kg, 500 g e 300 g.",
    seeProducts: "Ver mel e prezos",
    contactUs: "Escríbenos",
  },
  values: {
    title: "Por que sabe distinto",
    items: [
      {
        title: "Cru e sen filtrar",
        body: "Só o deixamos decantar. Non o quentamos, así conserva o pole, as enzimas e o aroma que o mel industrial perde polo camiño.",
      },
      {
        title: "Dun só colmeal",
        body: "Non compramos nin mesturamos mel de terceiros. Todo o que vendemos saíu das nosas colmeas.",
      },
      {
        title: "Colleita limitada",
        body: "Retiramos o que as abellas nos deixan sen forzar a colmea. Cando se acaba, hai que esperar á seguinte.",
      },
      {
        title: "Trato directo",
        body: "Sen intermediarios nin pasarela de pagamento. Escríbesnos, acordamos o pagamento e se cho mandamos ou o recolles, e listo.",
      },
    ],
  },
  products: {
    title: "O noso mel",
    intro:
      "Prezo de venda directa do produtor, sen gastos de tenda polo medio. O envío, se o precisas, vai aparte.",
    perKilo: "o quilo",
    plannedBadge: "Proximamente",
    availableBadge: "Dispoñible",
    names: productNames,
    descriptions: productDescriptions,
  },
  order: {
    title: "Monta o teu pedido",
    intro:
      "Escolle os tarros que queiras e prepáramosche a mensaxe. Revísala antes de enviala e pechamos por WhatsApp ou correo.",
    increase: "Engadir un máis",
    decrease: "Quitar un",
    quantityFor: "Tarros de",
    total: "Total",
    shippingNote: "Os tarros, sen o envío.",
    jarCount: "tarros",
    empty: "Engade algún tarro para preparar a mensaxe.",
    sendWhatsapp: "Enviar por WhatsApp",
    sendEmail: "Enviar por correo",
    preview: "Isto é o que se vai enviar",
    greeting: "Ola! Quería encargar:",
    emailSubject: "Pedido de mel",
    reset: "Comezar de novo",
  },
  story: {
    title: "Unhas poucas colmeas e moito monte",
    body: [
      "BARRIOMEL non é unha empresa: son unhas colmeas nun prado, ao lado do bosque, e o traballo de coidalas todo o ano para sacar o mel dun par de colleitas.",
      "As abellas traballan nun radio duns tres quilómetros, e por aquí o que hai é silva, castiñeiro, eucalipto e monte. De aí sae o sabor forte, que non se parece nada ao do mel de supermercado.",
      "Por iso o vendemos de ti a ti: a cantidade é a que é, e preferimos que saibas de onde vén o que comes.",
    ],
  },
  process: {
    title: "Da colmea ao tarro",
    steps: [
      {
        title: "Revísase a colmea",
        body: "En tempada abrimos cada colmea cada poucas semanas para comprobar tres cousas: que a raíña estea a poñer, que non lles falte comida e que non estean enfermas.",
      },
      {
        title: "Cátase cando está listo",
        body: "Retiramos só os cadros operculados, os que a abella xa selou con cera porque o mel está no seu punto de humidade.",
      },
      {
        title: "Extráese en frío",
        body: "Desoperculamos a man, extraemos con centrifugadora e deixamos decantar por gravidade. Nin un grao de calor.",
      },
      {
        title: "Envásase e sae",
        body: "Ao tarro directamente desde o decantador, e de aí á túa casa. Sen almacén nin meses de estantería.",
      },
    ],
  },
  gallery: {
    title: "O colmeal",
    intro: "Fotos da tempada, feitas onde traballan as abellas.",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        question: "Facedes envíos?",
        answer:
          "Si, por Correos. Os portes págaos o comprador e dependen do peso do paquete, así que dicímosche o importe exacto antes de pechar o pedido. Se estás pola zona, tamén podes recollelo en man e aforras ese gasto.",
      },
      {
        question: "Púxose duro, está malo?",
        answer:
          "Ao contrario, é bo sinal: o mel cru cristaliza só co tempo e co frío. Se o queres líquido outra vez, mete o tarro ao baño maría sen pasar dos 40 graos. Nunca ao microondas.",
      },
      {
        question: "Podo levar varios quilos?",
        answer:
          "Si. Para cantidades grandes escríbenos antes, porque a colleita é limitada e convén reservar.",
      },
      {
        question: "Sabe sempre igual?",
        answer:
          "Non, e é normal. Cada colleita depende do que florecese ese ano, así que a cor e o sabor cambian un pouco dunha á outra.",
      },
    ],
  },
  contact: {
    title: "Escríbenos e pechámolo",
    intro:
      "Non hai carro nin pagamento en liña: a venda é directa. Escríbesnos por onde che resulte máis cómodo, e mandámoscho por Correos ou recólleo en man, como che veña mellor.",
    whatsapp: "WhatsApp",
    whatsappHint: "O máis rápido, normalmente contestamos o mesmo día.",
    email: "Correo",
    emailHint: "Para pedidos grandes ou se prefires deixalo por escrito.",
    instagram: "Instagram",
    instagramHint: "Fotos da tempada e aviso cando hai colleita nova.",
    where: "Onde estamos",
    whereHint: "Recollida en man pola zona, ou envío por Correos a onde esteas.",
    registry: "Rexistro do colmeal",
    defaultMessage: "Ola! Escríbovos desde a web, quería preguntar polo mel.",
  },
  footer: {
    tagline: "Mel cru de colleita propia",
    rights: "Todos os dereitos reservados",
    madeIn: "Feito en Galicia",
  },
  photoAlts,
}
