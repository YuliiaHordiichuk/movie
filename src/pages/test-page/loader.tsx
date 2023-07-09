// test
import { MovieListRepository } from '../../domain/movie/repository/MovieListRepository';
export async function loader() {
  let response;
  try {
    response = await MovieListRepository.getPopular();
  } catch (error) {
    throw error('error');
  }

  return response;
}
