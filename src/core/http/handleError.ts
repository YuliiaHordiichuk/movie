import { AxiosError } from 'axios';
// todo custom errors + notification

export function handleError(error: AxiosError) {
  switch (error.response?.status) {
    case 401:
      console.log('401 error');
      break;
    case 403:
      console.log('403 error');
      break;
    case 500:
      console.log('500 error');
      break;
    default:
      // show notification + throw error if not caces described above;
      console.log('default error in handleError');
      throw error;
  }
}
