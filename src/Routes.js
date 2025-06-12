// dependencies
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screens
import Login from "./screens/login/Login.jsx";
import Registro from './screens/registro/Registro.jsx';
import RegistroTwo from './screens/registro-two/RegistroTwo.jsx';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="registro" component={Registro} options={{
                    headerShadowVisible: false,
                    title: '',
                    headerBackTitle: 'Voltar'
                }} />
                <Stack.Screen name="registrotwo" component={RegistroTwo} options={{
                    headerShadowVisible: false,
                    title: '',
                    headerBackTitle: 'Voltar'
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes
