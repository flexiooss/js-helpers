export const isImplement = (inst, constructorString) => {
  let proto = inst
  do {
    proto = Object.getPrototypeOf(proto)
    if (proto.constructor.toString() === constructorString) {
      return true
    }

  } while (proto)
  return false
}
