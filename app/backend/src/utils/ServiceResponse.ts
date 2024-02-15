export type ServiceResponseMessage = { message: string };

type ServiceResponseSuccessType = 'SUCCESS' | 'CREATED';

export type ServiceResponseSuccess<T> = {
  status: ServiceResponseSuccessType
  data: T
};

type ServiceResponseErrorType = 'BAD_REQUEST' | 'UNAUTHORIZED' | 'NOT_FOUND';

export type ServiceResponseError = {
  status: ServiceResponseErrorType,
  data: ServiceResponseMessage
};

export type ServiceResponse<T> = ServiceResponseSuccess<T> | ServiceResponseError;
