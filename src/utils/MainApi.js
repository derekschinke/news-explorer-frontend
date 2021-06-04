import { configs } from './constants';

class MainApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
  }
}

const mainApi = new MainApi({ baseUrl: configs.url.MAIN_API_URL });

export default mainApi;
