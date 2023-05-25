import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "../src/view/Details/Details";
import Start from "../src/view/Start/Start";
import Login from "../src/view/Login/Login";
import Home from "../src/view/Home/home";
import Register from "../src/view/Register/Register";
import Account from "../src/view/Account/Account";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={Start}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerStyle: {
              backgroundColor: "#f41e1e",
            },
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Register}
          options={{
            headerStyle: {
              backgroundColor: "#f41e1e",
            },
          }}
        />
        <Stack.Screen
          name="Filmes"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: "#f41e1e",
            },
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="Detalhes"
          component={Details}
          options={{
            headerLeft: null,
            headerStyle: {
              backgroundColor: "#f41e1e",
            },
          }}
        />
        <Stack.Screen
          name="Conta"
          component={Account}
          options={{
            headerStyle: {
              backgroundColor: "#f41e1e",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
