import colmenarPrado from "@/assets/photos/colmenar-prado.jpg"
import colmenasBosque from "@/assets/photos/colmenas-bosque.jpg"
import cuadroAbejas from "@/assets/photos/cuadro-abejas.jpg"
import cuadroOperculado from "@/assets/photos/cuadro-operculado.jpg"
import cuadroTaller from "@/assets/photos/cuadro-taller.jpg"
import tarros from "@/assets/photos/tarros.jpg"

export const photos = {
  colmenarPrado,
  tarros,
  cuadroAbejas,
  cuadroOperculado,
  colmenasBosque,
  cuadroTaller,
}

export type PhotoKey = keyof typeof photos

export const galleryPhotoKeys: readonly PhotoKey[] = [
  "colmenasBosque",
  "cuadroTaller",
  "cuadroAbejas",
  "cuadroOperculado",
]
