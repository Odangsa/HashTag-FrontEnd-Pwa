import { http, HttpResponse } from 'msw';

export const handlers = [
  http.post('/api/upload', () => {
    return HttpResponse.json({ success: true });
  }),
];
