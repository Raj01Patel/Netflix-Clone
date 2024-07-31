
import { useAuthStore } from "../../store/authUser";
import AuthScreen from "./AuthScreen";
import HomeScreen from "./HomeScreen";

const HomePage = () => {
  const user = useAuthStore();
  // const user = false;

  return <>{user ? <HomeScreen /> : <AuthScreen />}</>;
};
export default HomePage;