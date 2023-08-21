import { UserDao } from './UserDao'
import { PostDao } from './PostDao'
import { LikeDao } from './LikeDao'
import { CommentDao } from './CommentDao'
import { InMemoryDataStore } from './memorydb'


export interface DataStore extends UserDao, PostDao, LikeDao, CommentDao {

}
export const db = new InMemoryDataStore();