const prod = {
  url: {
    NEWS_API_URL: 'https://nomoreparties.co/news',
    MAIN_API_URL: 'https://whispering-falls-05433.herokuapp.com',
  },
};

const dev = {
  url: {
    NEWS_API_URL: 'https://newsapi.org',
    MAIN_API_URL: 'https://whispering-falls-05433.herokuapp.com',
  },
};

export default process.env.NODE_ENV === 'development' ? dev : prod;

export const MILLISECONDS_IN_WEEK = 7 * 24 * 3600 * 1000;

export const DEFAULT_NEWS_API_PAGE_SIZE = 100;

export const NEWS_API_KEY = '92429841b34f459299c94f716cd7477c';
