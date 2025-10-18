import fs from "fs"
import path from "path"

export async function getStaticProps() {
  const dir = path.join(process.cwd(), "public/carrusel")
  const files = fs.readdirSync(dir)
  const images = files.map((file) => `/carrusel/${file}`)

  return {
    props: { images },
  }
}
