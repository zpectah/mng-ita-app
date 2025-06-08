export default {
  meta: {
    name: 'Mongoliano Italiano',
  },
  routes: {
    home: {
      path: '/home',
    },
    cognatesFF: {
      path: '/cognates-ff',
    },
    cognates1000: {
      path: '/cognates-1000',
    },
    similarities: {
      path: '/similarities',
    },
    memo: {
      path: '/memo',
    },
  },
  source: {
    cognatesFF: '/public/cognates-ff.json',
    cognates1000: '/public/cognates-1000.json',
    similarities: '/public/similarities.json',
    memo: '/public/memo.json',
  },
};
