import { routes as info } from "./features/info/routes";
import { routes as posts } from "./features/posts/routes";

export const routes = [
  // put here features' routes
  ...info,
  ...posts,
];
