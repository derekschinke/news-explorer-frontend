import config from './constants';

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
          `&from=${this.from.toISOString()}` +
          `&to=${this.to.toISOString()}` +
          `&pageSize=${this.pageSize.toString()}` +
          `&language=en` +
          `&sortBy=relevancy`,
        {
          headers: {
            'X-Api-Key': this.apiKey,
          },
        }
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
  apiKey: process.env.REACT_APP_NEWS_API_KEY,
  from: new Date(Date.now() - 7 * 24 * 3600 * 1000),
  to: new Date(),
  pageSize: 100,
});

export default newsApi;
