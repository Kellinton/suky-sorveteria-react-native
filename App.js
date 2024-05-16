import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_800ExtraBold,
  Inter_700Bold,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { loginStyle } from "./src/styles/style";
import { dashboardStyle } from "./src/styles/style";
import { Feather } from "@expo/vector-icons";

function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={loginStyle.boxFundo}>
        <ImageBackground
          source={require("./assets/fundoLogin.png")}
          style={loginStyle.img}
        ></ImageBackground>
        <text style={loginStyle.txtFundo}>
          <span style={loginStyle.spanFundo}>Sorveteria</span> <br></br>Faça o login
          para acessar a área administrativa da sorveteria.
        </text>
      </View>

      {/* <StatusBar style="auto" /> */}

      <View style={loginStyle.container2}>
        <text style={loginStyle.txtLogin}>Login</text>
        <TextInput
          placeholder="Seu Login:"
          placeholderTextColor="gray"
          style={loginStyle.TextInput}
        />

        <TextInput
          secureTextEntry={true}
          placeholder="Sua Senha:"
          placeholderTextColor="gray"
          style={[loginStyle.TextInput]}
        />

        <text style={loginStyle.txtForgetPassword}>Esqueceu a senha?</text>

        {/* <button style={loginStyle.btn} onPress={() => navigation.navigate('Dashboard')}>ENTRAR</button> */}

        <TouchableOpacity
          onPress={() => navigation.navigate("dashboard")}
          style={loginStyle.btnLogin}
        >
          <Text style={loginStyle.entrarLogin}>ENTRAR</Text>
        </TouchableOpacity>

        <Text style={loginStyle.txtcodeForge}>Desenvolvido por CodeForge @2024</Text>
      </View>
    </View>
  );
}

function DashboardScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={dashboardStyle.topDash}>
        <Image source={require("./assets/fotoPerfil.png")}></Image>
        <View>
          <Text style={dashboardStyle.nomeDash}>Gustavo Soier</Text>
          <Text style={dashboardStyle.cargoDash}>administrador</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("dashboard")}
          style={dashboardStyle.btnNotificacao} >
        </TouchableOpacity>
      </View>

      <View style={dashboardStyle.bannerDash}>
        <View>
          <Text style={dashboardStyle.txtBanner}>Gerenciar</Text>
          <span style={dashboardStyle.spanBanner}>Estoque</span>
          <TouchableOpacity
          onPress={() => navigation.navigate("dashboard")} style={dashboardStyle.btnBanner} >
            <Text style={dashboardStyle.txtBtnBanner}>Acessar</Text>
        </TouchableOpacity>
        </View>
        <View>
          <Image source={require("./assets/bannerDashboard.png")}></Image>
        </View>
      </View>

      <View>
        <Text>Estatísticas</Text>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="dashboard" component={DashboardScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
