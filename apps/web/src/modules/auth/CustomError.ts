export const isInstanceOfAPIError = (object: unknown): object is ApiError => {
  return object instanceof ApiError && ('redirectUrl' in object || 'notFound' in object);
};

export class ApiError extends Error {
  redirectUrl: string;
  notFound: boolean;

  constructor(redirectUrl = '', notFound = false) {
    super();
    this.redirectUrl = redirectUrl;
    this.notFound = notFound;
  }
}

export class NotFoundError extends ApiError {
  constructor() {
    super('/404', true);
    this.name = 'NotFoundError';
    this.message = 'Page Not Found.';
  }
}

export class ForbiddenError extends ApiError {
  constructor() {
    super('/error');
    this.name = 'ForbiddenError';
    this.message = 'Failed to Authentication process.';
  }
}

export class AuthError extends ApiError {
  constructor() {
    super('/login');
    this.name = 'AuthError';
    this.message = 'You are an unauthenticated user. Please Login.';
  }
}

export class InternalServerError extends ApiError {
  constructor() {
    super('/error');
    this.name = 'InternalServerError';
    this.message = 'AskResume server is temporarily unavailable.';
  }
}
