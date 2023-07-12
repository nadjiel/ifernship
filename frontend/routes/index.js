import { useAuthContext } from "../context/auth.js";
import { PrivateNavigator } from "./private-navigator.js";
import { PublicNavigator } from "./public-navigator.js";

export function Routes() {
  const { isLogado } = useAuthContext();
  return isLogado ? <PrivateNavigator /> : <PublicNavigator />;
}
