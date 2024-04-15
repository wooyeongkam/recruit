import { http } from './http';

export const getLicense = () => {
  return http.get<GetLicense>('/enablement/license');
};

export type GetLicense = {
  id: number;
};
