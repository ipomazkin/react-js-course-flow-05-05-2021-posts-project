import { HomePage } from './pages/HomePage';
import { featureConf } from "./config";

export const routes = [
  {
    key: `${featureConf}/home`,
    path: '/',
    component: HomePage,
    exact: true,
  },
];
