import { HttpResponse, http } from 'msw';

export const handlers = [
  // /{userid}/hashtag
  http.post('/:userId/hashtag', () => {
    return HttpResponse.json({ success: true });
  }),
  http.get('/:userId/hashtag', () => {
    return HttpResponse.json({
      success: true,
      results: [
        {
          id: 1,
          hashtagList: [
            '성수',
            '성수동',
            '성수성수',
            '핫플',
            '좋반',
            '카페',
            '감성',
          ],
          title: '가장 추천하는 태그',
        },
        {
          id: 2,
          hashtagList: [
            '성수',
            '성수동',
            '성수성수',
            '핫플',
            '좋반',
            '카페',
            '감성',
          ],

          title: 'ai가 추천한 태그',
        },
        {
          id: 3,
          hashtagList: [
            '성수',
            '성수동',
            '성수성수',
            '핫플',
            '좋반',
            '카페',
            '감성',
          ],

          title: '장소가 관련된 태그',
        },
        {
          id: 4,
          hashtagList: [
            '성수',
            '성수동',
            '성수성수',
            '핫플',
            '좋반',
            '카페',
            '감성',
          ],

          title: '사람들이 가장 많이 단 태그',
        },
      ],
    });
  }),
];
