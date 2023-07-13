import { useAuthContext } from "../context/auth.js";
import { PrivateNavigator } from "./private-navigator.js";
import { PublicNavigator } from "./public-navigator.js";

export function Routes() {
  const { isLogged } = useAuthContext();
  return isLogged ? <PrivateNavigator /> : <PublicNavigator />;
}
