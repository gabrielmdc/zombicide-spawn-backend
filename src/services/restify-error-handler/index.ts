import { Next } from 'restify';
import { InternalServerError } from 'restify-errors';
import { ErrorHandler } from './error-handler';
import { errorHandler as dataErrorHandler } from './data-error-handler';

const errorHandlers: ErrorHandler[] = [dataErrorHandler];

export function handleErrors(next: Next, err: Error) {
  if (!err) {
    return next();
  }
  errorHandlers.forEach(handler => {
    if (handler.handleError(next, err)) {
      return;
    }
  });
  return next(new InternalServerError(err));
}
