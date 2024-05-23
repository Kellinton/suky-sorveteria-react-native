import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Button,
  Modal,
  ScrollView,
  SafeAreaView,
} from "react-native";



import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
import { menuStyle } from "./src/styles/style";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';


export function LoginScreen({ navigation }) {
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

export function DashboardScreen({ navigation }) {

  // const [visivel, setVisivel]=useState(false)

  return (

    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <SafeAreaView>

    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: '5%' }}>
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

      <View style={dashboardStyle.boxTituloEstatisticas}>
        <Text style={dashboardStyle.tituloEstatisticas}>Estatísticas</Text>
      </View>
    <View style={dashboardStyle.containerEstatisticas}>
      <View style={dashboardStyle.boxEstatisticas}>
          <span>920</span>
          <span style={dashboardStyle.txtBoxEstatisticas}>Estoque</span>
      </View>

      <View style={dashboardStyle.boxEstatisticas}>
        <span>52</span>
        <span style={dashboardStyle.txtBoxEstatisticas}>Vendidos</span>
      </View>

      <View style={dashboardStyle.boxEstatisticas}>
        <span>R$ 9 mil</span>
        <span style={dashboardStyle.txtBoxEstatisticas}>Lucro</span>
      </View>
    </View>

    <View style={dashboardStyle.boxTituloMensagem}>
        <Text style={dashboardStyle.tituloMensagem}>Mensagens Recentes</Text>
    </View>


    <View style={dashboardStyle.boxMensagem}>
      <Image source={require("./assets/fotoPerfil.png")} style={dashboardStyle.imgMensagem}></Image>

      <View>
        <Text>Gustavo Sampaio Soier</Text>
        <Text style={dashboardStyle.assuntoMensagem}>Assunto: ...</Text>        
      </View>

      <Text style={dashboardStyle.horarioMensagem}>1h</Text>

     {/* <Modal animationType="fade" transparent={true} visible={visivel}>
        <View>
          <Text>Deseja mesmo excluir essa mensagem?</Text>
          <Button onPress={()=>{setVisivel(false)}}></Button>
        </View>
      </Modal> */}

      <TouchableOpacity style={dashboardStyle.lixeiraDashboard}>
        <Ionicons name="trash-outline" size={18}></Ionicons>
      </TouchableOpacity>

    </View>

    <View style={dashboardStyle.boxMensagem}>
      <Image source={require("./assets/fotoPerfil.png")} style={dashboardStyle.imgMensagem}></Image>

      <View>
        <Text>Gustavo Sampaio Soier</Text>
        <Text style={dashboardStyle.assuntoMensagem}>Assunto: ...</Text>        
      </View>

      <Text style={dashboardStyle.horarioMensagem}>2h</Text>

      <TouchableOpacity style={dashboardStyle.lixeiraDashboard}>
        <Ionicons name="trash-outline" size={18}></Ionicons>
      </TouchableOpacity>

    </View>

    <View style={dashboardStyle.boxMensagem}>
      <Image source={require("./assets/fotoPerfil.png")} style={dashboardStyle.imgMensagem}></Image>

      <View>
        <Text>Gustavo Sampaio Soier</Text>
        <Text style={dashboardStyle.assuntoMensagem}>Assunto: ...</Text>        
      </View>

      <Text style={dashboardStyle.horarioMensagem}>3h</Text>

      <TouchableOpacity style={dashboardStyle.lixeiraDashboard}>
        <Ionicons name="trash-outline" size={18}></Ionicons>
      </TouchableOpacity>

    </View>

    </View>


    </SafeAreaView>
    </ScrollView>

  );
}

export function MenuScreen ({ navigation }) {
  return (
  <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <SafeAreaView>

    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", position: 'relative' }}>

      <Text style={menuStyle.tituloMenu}>Menu</Text>

      <View style={menuStyle.buscarMenu}>
        <Ionicons name="search-outline" size={18}></Ionicons>
        <Text style={menuStyle.titleBuscarMenu}>Buscar...</Text>
      </View>

      <View style={menuStyle.containerMenu}>

        <View style={menuStyle.boxMenuActive}>
          <Image source={require("./assets/acai-icon1.png")}></Image>
          <Text style={menuStyle.txtBoxMenuActive}>Açai</Text>
        </View>

        <View style={menuStyle.boxMenu}>
          <Image source={require("./assets/pote-roxo-icon1.png")}></Image>
          <Text style={menuStyle.txtBoxMenu}>Sorvete de Pote</Text>
        </View>

        <View style={menuStyle.boxMenu}>
          <Image source={require("./assets/picole-roxo-icon1.png")}></Image>
          <Text style={menuStyle.txtBoxMenu}>Picolé</Text>
        </View>

      </View>

      <View style={menuStyle.imgSemEstoque}>
        <Image  source={require("./assets/semEstoque.png")}></Image>
      </View>

      <View style={menuStyle.addProduto}>
          <Ionicons name="add-outline" size={20} color="#FFF"></Ionicons>
      </View>

    </View>

    </SafeAreaView>
  </ScrollView>
  );
}


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTab(){
  return (
    <Tab.Navigator>
      <Tab.Screen name="Início" component={DashboardScreen} options={{ headerShown: false, tabBarIcon: ({ color, size }) => <Ionicons name='home-outline' color={color} size={size} />
        }} />

      <Tab.Screen name="Menu" component={MenuScreen} options={{ headerShown: false, tabBarIcon: ({ color, size }) => <Ionicons name='document-text-outline' color={color} size={size} />
        }} />

      {/* <Tab.Screen name="Início" component={DashboardScreen} options={{ headerShown: false, tabBarIcon: ({ color, size }) => <Ionicons name='home-outline' color={color} size={size} />
       }} /> */}
    </Tab.Navigator>
  );
}
 
 function Routes(){
 return(
   <Stack.Navigator >
    <Stack.Screen name="Login" component={LoginScreen} options={{headerShown : false}} />
    <Stack.Screen name="dashboard" component={MyTab} options={{headerShown : false}} />
    <Stack.Screen name="Menu" component={MyTab} options={{headerShown : false}} />
  </Stack.Navigator>
 );
 }

 export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
