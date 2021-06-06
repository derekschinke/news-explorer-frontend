import config from './constants';

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
        throw new Error('Sign up failed');
      }

      return res.json();
    } catch (err) {
      console.log(err);
    }
  }

  async signIn(email, password) {
    try {
      const res = await fetch(`${this.baseUrl}/signin`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error('Sign in failed');
      }

      const data = await res.json();

      if (!data.token) {
        throw new Error('No token received');
      }

      localStorage.setItem('token', data.token);
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  async getUser(token) {
    try {
      const res = await fetch(`${this.baseUrl}/users/me`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      return res.json();
    } catch (err) {
      console.log(err);
    }
  }
}

const mainApi = new MainApi({ baseUrl: config.url.MAIN_API_URL });

export default mainApi;
