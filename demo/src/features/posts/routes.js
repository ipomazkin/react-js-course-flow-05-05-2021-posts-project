import { FeaturePage } from './pages/FeaturePage';
import { featureConf } from "./config";

import { PostsPage } from "./pages/PostsPage";
import { PostPage } from "./pages/PostPage";
import { CreatePostPage } from "./pages/CreatePostPage";
import { UpdatePostPage } from "./pages/UpdatePostPage";

export const routes = [
  {
    key: `${featureConf}/posts-list`,
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
    key: `${featureConf}/create-post`,
    path: '/new-post',
    component: CreatePostPage,
    exact: true,
  },  {
    key: `${featureConf}/update-post`,
    path: '/edit-post/:id',
    component: UpdatePostPage,
    exact: true,
  },
];
