import Axios from 'axios';
const axios = Axios.create();

export const http = {
  get: async <Response = unknown>(url: string) => {
    return axios.get<Response>(url).then((res) => res.data);
  },
  post: async <Request = unknown, Response = unknown>(url: string, data?: Request) => {
    return axios.post<Response>(url, { data }).then((res) => res.data);
  },
};
