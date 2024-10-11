import { Observable, from, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export function tryCatch<T>(
  operation: () => Promise<T> | Observable<T>,
  errorHandler?: (error: unknown) => void
): Observable<T | undefined> {
  const source = operation instanceof Function ? from(operation()) : operation;

  return source.pipe(
    catchError((error: unknown) => {
      if (errorHandler) {
        errorHandler(error);
      } else {
        logError('Unhandled error:', error);
      }
      return of(undefined);
    })
  );
}

function logError(message: string, error: unknown): void {
  console.error(`${message} ${error}`);
}
