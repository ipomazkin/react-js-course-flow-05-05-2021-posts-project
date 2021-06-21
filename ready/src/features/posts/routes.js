import { PostPage } from './pages/PostPage';
import { PostsPage } from './pages/PostsPage';
import { CreatePostPage } from './pages/CreatePostPage';
import { EditPostPage } from './pages/EditPostPage';
import { featureConf } from "./config";

export const routes = [
  {
    key: `${featureConf}/posts`,
    path: '/posts',
    component: PostsPage,
    exact: true,
  },
  {
    key: `${featureConf}/post`,
    path: '/posts/:id',
    component: PostPage,
    exact: true,
  },
  {
    key: `${featureConf}/new-post`,
    path: '/new-post',
    component: CreatePostPage,
    exact: true,
  },  {
    key: `${featureConf}/edit-post`,
    path: '/edit-post/:id',
    component: EditPostPage,
    exact: true,
  },

];
