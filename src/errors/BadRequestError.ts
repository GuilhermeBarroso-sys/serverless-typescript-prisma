import { CustomError } from "./CustomError";

export type TError = {
  message: string;
  field?: string | number;
}


class BadRequestError extends CustomError {
  statusCode = 400;
  serializeErrors(): TError[] {
    return [{
      message: this.message
    }]
  }
  constructor(message : string) {
    super(message)
    Object.setPrototypeOf(this, BadRequestError.prototype)
  }
}


export { BadRequestError }