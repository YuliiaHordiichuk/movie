import { AxiosError } from 'axios';

export function handleError(error: AxiosError) {
  switch (error.response?.status) {
    case 401:
      console.log('401 open authorization');
      break;
    case 403:
      console.log('403 go to 403 error page');
      break;
    case 500:
      console.log('500 go to server error page');
      break;
    case 404:
      console.log('404');
      break;
    default:
      console.log('show notification');
  }
}
