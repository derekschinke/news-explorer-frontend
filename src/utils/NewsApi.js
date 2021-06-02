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
    const res = await fetch(
      `${this.baseUrl}/v2/everything?` +
        `q=${request}` +
        `&from=${this.from.toISOString()}` +
        `&to=${this.to.toISOString()}` +
        `&pageSize=${this.pageSize.toString()}` +
        `&language=en` +
        `&sortBy=popularity`,
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': this.apiKey,
        },
      }
    );
    if (res.ok) {
      const data = await res.json();
      if (data) {
        return data.articles;
      }
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
