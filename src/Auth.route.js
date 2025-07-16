import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Image } from "react-native";
import icons from "./constants/icons";
// Screens
import Home from "./screens/home/Home";
import Pedidos from "./screens/pedidos/Pedidos";
import Favorito from "./screens/favorito/Favorito";
import Perfil from "./screens/perfil/Perfil";

const Tab = createBottomTabNavigator();

const Auth = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
                <Tab.Screen
                    name="home"
                    component={Home}
                    options={{
                        headerShown: false,
                        title: 'Home',
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={icons.abaHome}
                                style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="favorito"
                    component={Favorito}
                    options={{
                        headerShadowVisible: false,
                        title: 'Favoritos',
                        headerTitleAlign: 'center',
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={icons.abaFavoritos}
                                style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="pedidos"
                    component={Pedidos}
                    options={{
                        headerShadowVisible: false,
                        title: 'Meus Pedidos',
                        headerTitleAlign: 'center',
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={icons.abaPedidos}
                                style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="perfil"
                    component={Perfil}
                    options={{
                        headerShadowVisible: false,
                        title: 'Perfil',
                        headerTitleAlign: 'left',
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={icons.abaPerfil}
                                style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }}
                            />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Auth
