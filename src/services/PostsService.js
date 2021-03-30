import axios from "./../config/Axios";

export default class PostsService {
  static getPosts() {
    return axios.get(`/wp/v2/posts`);
  }
}
