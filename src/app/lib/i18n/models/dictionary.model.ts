export interface Dictionary {
  header: {
    home: string
    products: string
    contact: string
  }
  home: {
    title: string
    subtitle: string
    seeProducts: string
  }
  footer: {
    rights: string
    contact: string
  }
  products: {
    honey: string
    multifloral: {
      name: string
      desc: string
    }
    encina: {
      name: string
      desc: string
    }
  }
}
