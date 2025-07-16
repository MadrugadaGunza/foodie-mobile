import Auth from "./src/Auth.route";
import Public from "./src/Public.routes";

export default function App() {
  const user = true;

  return (
    user ? <Auth /> : <Public />
  );
}