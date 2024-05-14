import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_800ExtraBold, Inter_700Bold, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { styles } from './src/styles/style';
import { Feather } from '@expo/vector-icons';
 
function LoginScreen() {
  return (
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
 
       <View style={styles.boxFundo}>
<ImageBackground source={require('./assets/fundoLogin.png')} style={styles.img}>
</ImageBackground>
<text style={styles.txtFundo}><span style={styles.spanFundo}>Sorveteria</span> <br></br>Faça o login para acessar a área administrativa da sorveteria.</text>
</View>
 
       {/* <StatusBar style="auto" /> */}
 
 
      <View style={styles.container2}>
<text style={styles.txtLogin}>Login</text>
<TextInput placeholder='Seu Login:' placeholderTextColor="gray" style={styles.TextInput} />
 
         <TextInput secureTextEntry={true} placeholder='Sua Senha:' placeholderTextColor="gray" style={[styles.TextInput]} />
 
         <text style={styles.txtForgetPassword}>Esqueceu a senha?</text>
 
       {/* <button style={styles.btn} onPress={() => navigation.navigate('Dashboard')}>ENTRAR</button> */}
 
       <TouchableOpacity
        onPress={() => navigation.navigate('Dashboard')} style={styles.btn}>
          <Text>ENTRAR</Text>
        </TouchableOpacity>

</View> 
</View>
  );
}
 
 
function DashboardScreen() {
  return (
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
<Text>Soier</Text>
</View>
  );
}
 
const Tab = createBottomTabNavigator();
 
function MyTabs() {
  return (
<NavigationContainer>
<Tab.Navigator screenOptions={{ headerShown: false }}>
<Tab.Screen name="Dashboard" component={DashboardScreen} />
</Tab.Navigator>
</NavigationContainer>
  );
}

 
const Stack = createStackNavigator();
 
export default function App(){
  return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Login" component={LoginScreen} />
<Stack.Screen name="Main" component={MyTabs} />
</Stack.Navigator>
</NavigationContainer>
  );
}