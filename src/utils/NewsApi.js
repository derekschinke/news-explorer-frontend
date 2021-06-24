import config, {
  DEFAULT_NEWS_API_PAGE_SIZE,
  MILLISECONDS_IN_WEEK,
  NEWS_API_KEY,
} from './constants';

class NewsApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.apiKey = options.apiKey;
    this.from = options.from;
    this.to = options.to;
    this.pageSize = options.pageSize;
  }

  async getArticles(request) {
    try {
      const res = await fetch(
        `${this.baseUrl}/v2/everything?` +
          `q=${request}` +
          `&apiKey=${this.apiKey}` +
          `&from=${this.from.toISOString()}` +
          `&to=${this.to.toISOString()}` +
          `&pageSize=${this.pageSize.toString()}` +
          `&language=en` +
          `&sortBy=relevancy`
      );

      if (!res.ok) {
        throw new Error('News API fetch failed');
      }

      const data = await res.json();
      return data.articles;
    } catch (err) {
      console.log(err);
    }
  }
}

const newsApi = new NewsApi({
  baseUrl: config.url.NEWS_API_URL,
  apiKey: NEWS_API_KEY,
  from: new Date(Date.now() - MILLISECONDS_IN_WEEK),
  to: new Date(),
  pageSize: DEFAULT_NEWS_API_PAGE_SIZE,
});

export default newsApi;
