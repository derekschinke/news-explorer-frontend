import { configs } from './constants';

class MainApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
  }

  async signUp(email, password, name) {
    try {
      const res = await fetch(`${this.baseUrl}/signup`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name }),
      });

      if (!res.ok) {
        throw new Error('Registration failed');
      }

      return res.json();
    } catch (err) {
      console.log(err);
    }
  }
}

const mainApi = new MainApi({ baseUrl: configs.url.MAIN_API_URL });

export default mainApi;
