// dependencies
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screens
import Login from "./screens/login/Login.jsx";
import Registro from './screens/registro/Registro.jsx';
import RegistroTwo from './screens/registro-two/RegistroTwo.jsx';
import Home from "./screens/home/Home.jsx";
import Favorito from "./screens/favorito/Favorito.jsx";
import Pedidos from "./screens/pedidos/Pedidos.jsx";

const Stack = createNativeStackNavigator();

const Public = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="registro"
                    component={Registro}
                    options={{ headerShadowVisible: false, title: '' }}
                />
                <Stack.Screen
                    name="registrotwo"
                    component={RegistroTwo}
                    options={{ headerShadowVisible: false, title: '' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Public
