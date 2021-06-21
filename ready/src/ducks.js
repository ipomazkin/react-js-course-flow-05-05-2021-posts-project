import { ducks as info } from "./features/info/ducks";
import { ducks as posts } from "./features/posts/ducks";

export const ducks = [
  // put here features' ducks
  ...info,
  ...posts,
];
