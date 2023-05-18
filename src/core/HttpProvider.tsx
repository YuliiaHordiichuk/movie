const baseURL = 'https://api.themoviedb.org/3';
const authKey = '?api_key=862ab2f09526a8005ffeb7bb3710a1c9';

type Options = Record<string, unknown>;

const formatQueryParams = (options: Options) => {
  return (
    '&' +
    Object.keys(options)
      .map((param) => `${param}=${options[param]}`)
      .join('&')
  );
};

export const HttpProvider = {
  //fetch

  get(path: string, config?: Options) {
    let queryParams = '';
    if (config) {
      queryParams = formatQueryParams(config);
    }
    return fetch(`${baseURL}${path}${authKey}${queryParams}`);
  },

  post(path: string, data?: RequestInit | undefined) {
    const config = {
      method: 'POST',
      body: JSON.stringify(data)
    };
    return fetch(`${baseURL}${path}${authKey}`, config);
  },
  put(path: string, data?: RequestInit | undefined) {
    const config = {
      method: 'PUT',
      body: JSON.stringify(data)
    };
    return fetch(`${baseURL}${path}${authKey}`, config);
  },
  delete(path: string) {
    const config = {
      method: 'DELETE'
    };
    return fetch(`${baseURL}${path}${authKey}`, config);
  }
};
