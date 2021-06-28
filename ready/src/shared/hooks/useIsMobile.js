import { useSelector } from "react-redux";
import * as SettingsDuck from "../ducks/settings.duck";

export function useIsMobile() {
  return useSelector(SettingsDuck.selectIsMobile);
}
