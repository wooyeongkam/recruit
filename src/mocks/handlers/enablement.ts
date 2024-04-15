import { http, HttpResponse } from 'msw';

export const enablementHandlers = [
  http.get('/enablement/license', () => {
    return HttpResponse.json({
      id: '1234567',
    });
  }),
];
