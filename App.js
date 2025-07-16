import Auth from "./src/Auth.route";
import Public from "./src/Public.routes";

export default function App() {
  const isUserAuth = true;

  return (
    isUserAuth ? <Auth /> : <Public />
  );
}