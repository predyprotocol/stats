// Gets n items from last
export function sliceLastItems<T>(arr: T[], n: number) {
  return arr.filter((_, i) => i > arr.length - n - 1)
}

// Trim n items
export function trimArray<T>(arr: T[], n: number) {
  return arr.filter((_, i) => {
    if (i >= n && i < arr.length - n) return true

    return false
  })
}
