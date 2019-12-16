import {isNull} from '@flexio-oss/assert'


export const isImplement = (inst, constructorString) => {
  let proto = inst
  if (!isNull(proto)) {

    do {
      if (proto.constructor.toString() === constructorString) {
        return true
      }
      proto = Object.getPrototypeOf(proto)

    } while (!isNull(proto))
  }
  return false
}
