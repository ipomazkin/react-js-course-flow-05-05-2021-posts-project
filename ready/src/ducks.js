import { ducks as info } from "./features/info/ducks";
import { ducks as posts } from "./features/posts/ducks";
import * as SettingsDuck from './shared/ducks/settings.duck';

export const ducks = [
  SettingsDuck,
  // put here features' ducks
  ...info,
  ...posts,
];
