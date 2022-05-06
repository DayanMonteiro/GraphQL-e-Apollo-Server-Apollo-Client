import { RESTDataSource } from 'apollo-datasource-rest';
import { makeUserDataLoader } from './dataloaders';
export class PostsApi extends RESTDataSource {
  constructor() {
    // chama o construtor da classe
    super();
    this.baseURL = process.env.API_URL + '/posts/';
    this.dataLoader = makeUserDataLoader(this.getUsers.bind(this));
  }

  async getPosts(urlParams = {}) {
    // '', é o primeiro parametro que é o caminho no caso a API_URL
    return this.get('', urlParams, {
      cacheOptions: { ttl: 60 },
    });
  }

  async getPost(id) {
    return this.get(id, undefined, {
      cacheOptions: { ttl: 60 },
    });
  }

  batchLoadByUserId(id) {
    return this.dataLoader.load(id);
  }
}