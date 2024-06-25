import * as React from "react";

import { useState, useEffect } from "react"; // Reconhece os comandos de start inicial

import Modal  from "react-native-modal";
import axios from "axios"; // Faz a requisição HTTP para a API
import AsyncStorage from "@react-native-async-storage/async-storage"; // Para fazer o storage

import {
  StyleSheet,
  Text,
  View,
  Image,
  Span,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Button,
  ScrollView,
  SafeAreaView,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Picker} from '@react-native-picker/picker';
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
import { estoqueStyle } from "./src/styles/style";
import { editarPerfilStyle } from "./src/styles/style";
import { visualizarPerfilStyle } from "./src/styles/style";
import { funcionarioStyle } from "./src/styles/style";
import { visualizarMenuStyle } from "./src/styles/style";
import { editarMenuStyle } from "./src/styles/style";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";



export function LoginScreen({ navigation }) {

// Importando o hook useState do React
const [email, setEmail] = useState(""); 
// Cria uma variável de estado chamada "email" e uma função "setEmail" para atualizá-la. O estado inicial é uma string vazia.

const [senha, setSenha] = useState(""); 
// Cria uma variável de estado chamada "senha" e uma função "setSenha" para atualizá-la. O estado inicial é uma string vazia.

const [errorModalVisible, setErrorModalVisible] = useState(false); 
// Cria uma variável de estado chamada "errorModalVisible" e uma função "setErrorModalVisible" para atualizá-la. O estado inicial é "false". Essa variável provavelmente será usada para controlar a visibilidade de um modal de erro.

const [isFocused, setIsFocused] = React.useState(false); 
// Cria uma variável de estado chamada "isFocused" e uma função "setIsFocused" para atualizá-la. O estado inicial é "false". Essa variável pode ser usada para indicar se um campo de entrada está focado ou não.

  // Define uma função assíncrona chamada "handleLogin". Esta função será usada para lidar com o evento de login.
const handleLogin = async () => {
  //Verificar se o email ou a senha estão preenchidos
  if (!email.trim() || !senha.trim()) {
    setErrorModalVisible(true);
    return;
  }

  try{
    // const resposta = await axios.post(`http://127.0.0.1:8000/api/login?email=?{email}&senha=${senha}`);
    const resposta = await axios.post(`http://127.0.0.1:8000/api/login`, {
      email: email,
      senha: senha
  });
    if(resposta.data) {
      const administrador = resposta.data;

      if (administrador) {
        console.log(administrador);
        console.log(administrador.usuario.dados_administrador.idAdministrador);
        console.log(administrador.usuario.dados_administrador.nome);
        console.log(administrador.access_token);

        const idAdministrador = administrador.usuario.dados_administrador.idAdministrador;
        const token = administrador.access_token;

        // Armazenar o token na memória do APP (assyncStorage)
        await AsyncStorage.setItem('userToken', token);
        navigation.navigate('dashboard', {idAdministrador});        
      }
    }
  }
  catch (error) {
    console.error("Erro ao verificar o email e a senha", error);    
    setErrorModalVisible("Erro","Erro ao verificar email e senha");
  }
};


  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={loginStyle.boxFundo}>
        <ImageBackground
          source={require("./assets/fundoLogin.png")}
          style={loginStyle.img}
        ></ImageBackground>
        <text style={loginStyle.txtFundo}>
          <span style={loginStyle.spanFundo}>Sorveteria</span> <br></br>Faça o
          login para acessar a área administrativa da sorveteria.
        </text>
      </View>

      {/* <StatusBar style="auto" /> */}

      <View style={loginStyle.container2}>
        <text style={loginStyle.txtLogin}>Login</text>
        <TextInput
          placeholder="Seu Email:"
          placeholderTextColor="gray"
          style={loginStyle.TextInput}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          secureTextEntry={true}
          placeholder="Sua Senha:"
          placeholderTextColor="gray"
          style={[loginStyle.TextInput]}
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity
          style={loginStyle.txtForgetPassword}
          onPress={() => navigation.navigate("EsqueciSenha")}
        >
          Esqueceu a senha?
        </TouchableOpacity>

        {/* <button style={loginStyle.btn} onPress={() => navigation.navigate('Dashboard')}>ENTRAR</button> */}

        <TouchableOpacity
          onPress={handleLogin}
          style={loginStyle.btnLogin}
        >
          <Text style={loginStyle.entrarLogin}>ENTRAR</Text>
        </TouchableOpacity>

        <Text style={loginStyle.txtcodeForge}>
          Desenvolvido por CodeForge @2024
        </Text>

        <Modal isVisible={errorModalVisible} onBackdropPress={() => setErrorModalVisible(false)} >
          <View style={loginStyle.errorModalContainer}>
            <Text style={loginStyle.errorModalTitle}>* Erro *</Text>
            <Text  style={loginStyle.errorModalMessage}>Email ou Senha incorretos. Tente Novamente!!!</Text>
            <TouchableOpacity onPress={() => setErrorModalVisible(false)}>
              <Text style={loginStyle.errorModalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </Modal>

      </View>
    </View>
  );
}

export function EsqueciSenhaScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={loginStyle.boxFundo}>
        <ImageBackground
          source={require("./assets/fundoLogin.png")}
          style={loginStyle.img}
        ></ImageBackground>
      </View>

      {/* <StatusBar style="auto" /> */}

      <View style={loginStyle.container2}>
        <text style={loginStyle.txtLogin}>Recuperar Senha</text>
        <TextInput
          placeholder="Informe seu Email:"
          placeholderTextColor="gray"
          style={loginStyle.TextInput}
        />

        <TextInput
          secureTextEntry={true}
          placeholder="Informe o Token:"
          placeholderTextColor="gray"
          style={[loginStyle.TextInput]}
        />

        {/* <button style={loginStyle.btn} onPress={() => navigation.navigate('Dashboard')}>ENTRAR</button> */}

        <TouchableOpacity
          onPress={() => navigation.navigate("dashboard")}
          style={loginStyle.btnLogin}
        >
          <Text style={loginStyle.entrarLogin}>Recuperar</Text>
        </TouchableOpacity>

        <Text style={loginStyle.txtcodeForge}>
          Desenvolvido por CodeForge @2024
        </Text>
      </View>
    </View>
  );
}

export function DashboardScreen({ navigation, route }) {

  const { idAdministrador } = route.params || {}; // Carrega mesmo sem informação

  console.log("Cód Administrador: ", idAdministrador);
  console.log(route.params);

  const [nomeAdministrador, setNomeAdministrador] = useState("");

  useEffect (() => {
    const fetchUsuarioData = async () => {
      try{
        const token = await AsyncStorage.getItem('userToken');
        const resposta = await axios.get(`http://127.0.0.1:8000/api/administrador/show/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
      });
      setNomeAdministrador(resposta.data.nome); // Nome deve estar da mesmo maneira do json da API
      console.log(resposta.data.nome);
      console.log(nomeAdministrador);
      }
      catch (error) {
        console.error("Erro ao buscar os dados do administrador: ", error);
      }
    };
    if (idAdministrador) {
      fetchUsuarioData();
    }
  }, [idAdministrador]);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5%",
          }}
        >
          <View style={dashboardStyle.topDash}>
            <TouchableOpacity
              onPress={() => navigation.navigate("visualizarPerfil")}
            >
              <Image source={require("./assets/fotoPerfil.png")}></Image>
            </TouchableOpacity>

            {/* <Modal animationType="fade" transparent={true} visible={visivel}>
          <View>
            <Text>Teste</Text>
            <Button title="fechar" onPress={()=>{setVisivel(false)}}></Button>
          </View>
        </Modal> */}

            <View>
              <Text style={dashboardStyle.nomeDash}>{nomeAdministrador}</Text>
              <Text style={dashboardStyle.cargoDash}>Administrador</Text>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("dashboard")}
              style={dashboardStyle.btnNotificacao}>
              <Ionicons name="settings" size={28} color="#FFF"></Ionicons>
            </TouchableOpacity>
          </View>

          <View style={dashboardStyle.bannerDash}>
            <View>
              <Text style={dashboardStyle.txtBanner}>Gerenciar</Text>
              <span style={dashboardStyle.spanBanner}>Estoque</span>
              <TouchableOpacity
                onPress={() => navigation.navigate("dashboard")}
                style={dashboardStyle.btnBanner}
              >
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
              <Ionicons name="cube" size={22} color="#FFF"></Ionicons>
              <span>920</span>
              <span style={dashboardStyle.txtBoxEstatisticas}>Estoque</span>
            </View>

            <View style={dashboardStyle.boxEstatisticas}>
              <Ionicons name="ice-cream" size={22} color="#FFF"></Ionicons>
              <span>52</span>
              <span style={dashboardStyle.txtBoxEstatisticas}>Vendidos</span>
            </View>

            <View style={dashboardStyle.boxEstatisticas}>
              <Ionicons name="people" size={22} color="#FFF"></Ionicons>
              <span>R$ 9 mil</span>
              <span style={dashboardStyle.txtBoxEstatisticas}>Lucro</span>
            </View>
          </View>

          <View style={dashboardStyle.boxTituloMensagem}>
            <Text style={dashboardStyle.tituloMensagem}>
              Mensagens Recentes
            </Text>
          </View>

          <View style={dashboardStyle.boxMensagem}>
            <Image
              source={require("./assets/fotoPerfil.png")}
              style={dashboardStyle.imgMensagem}
            ></Image>

            <View>
              <Text>Gustavo Sampaio Soier</Text>
              <Text style={dashboardStyle.assuntoMensagem}>Assunto: ...</Text>
            </View>

            <Text style={dashboardStyle.horarioMensagem}>1h</Text>

            <TouchableOpacity style={dashboardStyle.lixeiraDashboard}>
              <Ionicons name="trash-outline" size={22}></Ionicons>
            </TouchableOpacity>
          </View>

          <View style={dashboardStyle.boxMensagem}>
            <Image
              source={require("./assets/fotoPerfil.png")}
              style={dashboardStyle.imgMensagem}
            ></Image>

            <View>
              <Text>Gustavo Sampaio Soier</Text>
              <Text style={dashboardStyle.assuntoMensagem}>Assunto: ...</Text>
            </View>

            <Text style={dashboardStyle.horarioMensagem}>2h</Text>

            <TouchableOpacity style={dashboardStyle.lixeiraDashboard}>
              <Ionicons name="trash-outline" size={22}></Ionicons>
            </TouchableOpacity>
          </View>

          <View style={dashboardStyle.boxMensagem}>
            <Image
              source={require("./assets/fotoPerfil.png")}
              style={dashboardStyle.imgMensagem}
            ></Image>

            <View>
              <Text>Gustavo Sampaio Soier</Text>
              <Text style={dashboardStyle.assuntoMensagem}>Assunto: ...</Text>
            </View>

            <Text style={dashboardStyle.horarioMensagem}>3h</Text>

            <TouchableOpacity style={dashboardStyle.lixeiraDashboard}>
              <Ionicons name="trash-outline" size={22}></Ionicons>
            </TouchableOpacity>
          </View>

          {/* <Modal animationType="fade" transparent={true} visible={modalVisible}>
            <View style={dashboardStyle.modalContainer}>
              <View style={dashboardStyle.modalContent}>
                <Text>Deseja mesmo excluir essa mensagem?</Text>
                <Button title="Cancelar" onPress={closeModal} />
              </View>
            </View>
    </Modal> */}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export function MenuScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#F4F8FF" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SafeAreaView>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <View style={menuStyle.boxTopoMenu}>
              <Text style={menuStyle.tituloMenu}>Menu</Text>
              <View style={dashboardStyle.containerEstatisticas}>
                <View style={menuStyle.boxEstatisticasMenu}>
                  <Ionicons name="ice-cream" size={25} color="#FFF" />
                  <span>52</span>
                  <span style={dashboardStyle.txtBoxEstatisticas}>
                    Produtos
                  </span>
                </View>

                <View style={menuStyle.boxEstatisticasMenu}>
                  <Ionicons name="logo-usd" size={25} color="#FFF" />
                  <span>R$ 20.780</span>
                  <span style={dashboardStyle.txtBoxEstatisticas}>
                    Valor em Produtos
                  </span>
                </View>

                <View style={menuStyle.boxEstatisticasMenu}>
                  <Ionicons name="eye-off" size={25} color="#FFF" />
                  <span>2</span>
                  <span style={dashboardStyle.txtBoxEstatisticas}>
                    Indisponíveis
                  </span>
                </View>
              </View>
            </View>

            <View style={menuStyle.buscarMenu}>
              <Ionicons name="search-outline" size={18} />
              <TextInput
                style={menuStyle.titleBuscarMenu}
                placeholder="Buscar"
              />
            </View>

            <View style={menuStyle.containerMainmenu}>
              <View style={menuStyle.boxContainerMenu}>
                <View>
                  <Image source={require("./assets/acai_morango.png")} />
                  <span style={menuStyle.precoMenu}>R$ 15,00</span>
                </View>

                <View style={menuStyle.cardMenu}>
                  <Text style={menuStyle.tituloCardMenu}>
                    Açai Tropical - 500ml
                  </Text>
                  <Text style={menuStyle.descricaoCardMenu}>
                    Uma deliciosa combinação de açaí cremoso...
                  </Text>

                  <View style={menuStyle.btnCardMenu}>
                    <View style={menuStyle.iconAcaiMenu}>
                      <Ionicons name="ice-cream" size={25} color="#C96DFF" />
                      <Text>Açaí</Text>
                    </View>

                    <TouchableOpacity
                      style={menuStyle.btnSetaMenu}
                      onPress={() => navigation.navigate("VisualizarMenu")}
                    >
                      <Ionicons
                        name="arrow-forward-outline"
                        size={18}
                        color="#FFF"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={menuStyle.boxContainerMenu}>
                <View>
                  <Image source={require("./assets/acai_morango.png")} />
                  <span style={menuStyle.precoMenu}>R$ 15,00</span>
                </View>

                <View style={menuStyle.cardMenu}>
                  <Text style={menuStyle.tituloCardMenu}>
                    Açai Tropical - 500ml
                  </Text>
                  <Text style={menuStyle.descricaoCardMenu}>
                    Uma deliciosa combinação de açaí cremoso...
                  </Text>

                  <View style={menuStyle.btnCardMenu}>
                    <View style={menuStyle.iconAcaiMenu}>
                      <Ionicons name="ice-cream" size={25} color="#C96DFF" />
                      <Text>Açaí</Text>
                    </View>

                    <TouchableOpacity
                      style={menuStyle.btnSetaMenu}
                      onPress={() => navigation.navigate("VisualizarMenu")}
                    >
                      <Ionicons
                        name="arrow-forward-outline"
                        size={18}
                        color="#FFF"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={menuStyle.boxContainerMenu}>
                <View>
                  <Image source={require("./assets/acai_morango.png")} />
                  <span style={menuStyle.precoMenu}>R$ 15,00</span>
                </View>

                <View style={menuStyle.cardMenu}>
                  <Text style={menuStyle.tituloCardMenu}>
                    Açai Tropical - 500ml
                  </Text>
                  <Text style={menuStyle.descricaoCardMenu}>
                    Uma deliciosa combinação de açaí cremoso...
                  </Text>

                  <View style={menuStyle.btnCardMenu}>
                    <View style={menuStyle.iconAcaiMenu}>
                      <Ionicons name="ice-cream" size={25} color="#C96DFF" />
                      <Text>Açaí</Text>
                    </View>

                    <TouchableOpacity
                      style={menuStyle.btnSetaMenu}
                      onPress={() => navigation.navigate("VisualizarMenu")}
                    >
                      <Ionicons
                        name="arrow-forward-outline"
                        size={18}
                        color="#FFF"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={menuStyle.boxContainerMenu}>
                <View>
                  <Image source={require("./assets/acai_morango.png")} />
                  <span style={menuStyle.precoMenu}>R$ 15,00</span>
                </View>

                <View style={menuStyle.cardMenu}>
                  <Text style={menuStyle.tituloCardMenu}>
                    Açai Tropical - 500ml
                  </Text>
                  <Text style={menuStyle.descricaoCardMenu}>
                    Uma deliciosa combinação de açaí cremoso...
                  </Text>

                  <View style={menuStyle.btnCardMenu}>
                    <View style={menuStyle.iconAcaiMenu}>
                      <Ionicons name="ice-cream" size={25} color="#C96DFF" />
                      <Text>Açaí</Text>
                    </View>

                    <TouchableOpacity
                      style={menuStyle.btnSetaMenu}
                      onPress={() => navigation.navigate("VisualizarMenu")}
                    >
                      <Ionicons
                        name="arrow-forward-outline"
                        size={18}
                        color="#FFF"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={menuStyle.boxContainerMenu}>
                <View>
                  <Image source={require("./assets/acai_morango.png")} />
                  <span style={menuStyle.precoMenu}>R$ 15,00</span>
                </View>

                <View style={menuStyle.cardMenu}>
                  <Text style={menuStyle.tituloCardMenu}>
                    Açai Tropical - 500ml
                  </Text>
                  <Text style={menuStyle.descricaoCardMenu}>
                    Uma deliciosa combinação de açaí cremoso...
                  </Text>

                  <View style={menuStyle.btnCardMenu}>
                    <View style={menuStyle.iconAcaiMenu}>
                      <Ionicons name="ice-cream" size={25} color="#C96DFF" />
                      <Text>Açaí</Text>
                    </View>

                    <TouchableOpacity
                      style={menuStyle.btnSetaMenu}
                      onPress={() => navigation.navigate("VisualizarMenu")}
                    >
                      <Ionicons
                        name="arrow-forward-outline"
                        size={18}
                        color="#FFF"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            {/* <View style={menuStyle.containerMenu}>
              <View style={menuStyle.boxMenuActive}>
                <Image source={require("./assets/acai-icon1.png")} />
                <Text style={menuStyle.txtBoxMenuActive}>Açai</Text>
              </View>

              <View style={menuStyle.boxMenu}>
                <Image source={require("./assets/pote-roxo-icon1.png")} />
                <Text style={menuStyle.txtBoxMenu}>Sorvete de Pote</Text>
              </View>

              <View style={menuStyle.boxMenu}>
                <Image source={require("./assets/picole-roxo-icon1.png")} />
                <Text style={menuStyle.txtBoxMenu}>Picolé</Text>
              </View>
            </View> */}

            {/* <View style={menuStyle.imgSemEstoque}>
              <Image source={require("./assets/semEstoque.png")} />
            </View> */}
          </View>
        </SafeAreaView>
      </ScrollView>

      <View
        style={[
          menuStyle.addProduto,
          { position: "absolute", bottom: 20, right: 20 },
        ]}
      >
        <Ionicons name="add-outline" size={20} color="#FFF" />
      </View>
    </View>
  );
}

export function VisualizarMenuScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            margin: "5%",
          }}
        >
          <View style={visualizarMenuStyle.containerVisualizarMenu}>
            <Text style={visualizarMenuStyle.tituloVisualizarMenu}>
              Detalhes
            </Text>
            <View style={visualizarMenuStyle.boxImgVisualizarMenu}>
              <Image source={require("./assets/imgVisualizarMenu.png")}></Image>
              <span style={visualizarMenuStyle.precoVisualizarMenu}>R$ 30,00</span>
            </View>
            <Text style={visualizarMenuStyle.nomeProdutoMenu}>
              Açaí Tropical - 500ml
            </Text>
            <View style={visualizarMenuStyle.boxIcons}>
              <View style={visualizarMenuStyle.iconAcaiVisualizarMenu}>
                <Ionicons name="ice-cream" size={25} color="#C96DFF" />
                <Text>Açaí</Text>
              </View>
              <View style={menuStyle.iconAcaiMenu}>
                <Ionicons name="checkmark-circle" size={25} color="#C96DFF" />
                <Text>Disponível</Text>
              </View>
            </View>
            <Text style={visualizarMenuStyle.tituloDescricao}>Descrição</Text>
            <Text style={visualizarMenuStyle.textoDescricao}>
              Uma deliciosa combinação de açaí cremoso, morango fresco, disquete
              crocante, banana e coco ralado, uma explosão de sabores tropicais
              em cada colherada!
            </Text>

            <TouchableOpacity
            style={visualizarMenuStyle.btnEditarMenu}
            onPress={() => navigation.navigate("editarMenu")}
            >
            Editar
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export function EditarMenuScreen({ navigation }) {

  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            margin: "5%",
            position: "relative",
          }}
        >
         
         <View>
         
         <Text style={visualizarMenuStyle.tituloVisualizarMenu}>
              Editar
         </Text>
         
         <View style={visualizarMenuStyle.boxImgVisualizarMenu}>
              <Image source={require("./assets/imgVisualizarMenu.png")}></Image>
              <span style={editarMenuStyle.alterarImgEditarMenu}>Trocar Imagem</span>
          </View>

          <TextInput style={editarMenuStyle.inputNomeEditar}
          placeholder="Nome:"
          placeholderTextColor="gray" />

          <TextInput style={editarMenuStyle.inputDescriçãoEditar}
          placeholder="Descrição:"
          multiline={true}
          numberOfLines={4}
          placeholderTextColor="gray" />
         </View> 

         <Picker
         style={editarMenuStyle.selectMenu}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Açaí" value="acai" />
            <Picker.Item label="Sorvete de pote" value="sorvetePote" />
            <Picker.Item label="picolé" value="picole" />
          </Picker>

         <View style={editarMenuStyle.containarBtn}>
          <View style={editarMenuStyle.boxBtnCancelar}>
            <TouchableOpacity style={editarMenuStyle.btnCancelar} onPress={() => navigation.navigate("VisualizarMenu")}>
              Cancelar
            </TouchableOpacity>
          </View>

          <View style={editarMenuStyle.boxBtnSalvar}>
            <TouchableOpacity style={editarMenuStyle.btnSalvar}>
              Salvar
            </TouchableOpacity>
          </View>
         </View>

        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export function EstoqueScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        justifyContent: "center",
      }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SafeAreaView>
          <View style={menuStyle.boxTopoMenu}>
            <Text style={menuStyle.tituloMenu}>Estoque</Text>
            <View style={dashboardStyle.containerEstatisticas}>
              <View style={menuStyle.boxEstatisticasMenu}>
                <Ionicons name="file-tray" size={25} color="#FFF" />
                <span>52</span>
                <span style={dashboardStyle.txtBoxEstatisticas}>Estoque</span>
              </View>

              <View style={menuStyle.boxEstatisticasMenu}>
                <Ionicons name="cash" size={25} color="#FFF" />
                <span>R$ 20.780</span>
                <span style={dashboardStyle.txtBoxEstatisticas}>
                  Despesa Mensal
                </span>
              </View>

              <View style={menuStyle.boxEstatisticasMenu}>
                <Ionicons name="eye-off" size={25} color="#FFF" />
                <span>2</span>
                <span style={dashboardStyle.txtBoxEstatisticas}>
                  Estoque Baixo
                </span>
              </View>
            </View>
          </View>

          <View style={menuStyle.buscarMenu}>
            <Ionicons name="search-outline" size={18}></Ionicons>
            <TextInput style={menuStyle.titleBuscarMenu} placeholder="Buscar" />
          </View>

          <View style={dashboardStyle.boxMensagem}>
            <Image
              source={require("./assets/acaiEstoque.png")}
              style={dashboardStyle.imgMensagem}
            ></Image>

            <View>
              <Text>Açai com cereal</Text>
              <Text style={estoqueStyle.valorEstoque}>R$ 10</Text>
            </View>

            <View style={estoqueStyle.boxContEstoque}>
              <TouchableOpacity style={estoqueStyle.btnDiminuirEstoque}>
                <Ionicons
                  name="remove-outline"
                  size={22}
                  color="#6B50F6"
                ></Ionicons>
              </TouchableOpacity>

              <span style={estoqueStyle.qtdEstoque}>10</span>

              <TouchableOpacity style={estoqueStyle.btnAdicionarEstoque}>
                <Ionicons name="add-outline" size={22} color="#FFF"></Ionicons>
              </TouchableOpacity>
            </View>
          </View>

          <View style={dashboardStyle.boxMensagem}>
            <Image
              source={require("./assets/acaiEstoque.png")}
              style={dashboardStyle.imgMensagem}
            ></Image>

            <View>
              <Text>Açai com morango</Text>
              <Text style={estoqueStyle.valorEstoque}>R$ 10</Text>
            </View>

            <View style={estoqueStyle.boxContEstoque}>
              <TouchableOpacity style={estoqueStyle.btnDiminuirEstoque}>
                <Ionicons
                  name="remove-outline"
                  size={22}
                  color="#6B50F6"
                ></Ionicons>
              </TouchableOpacity>

              <span style={estoqueStyle.qtdEstoque}>14</span>

              <TouchableOpacity style={estoqueStyle.btnAdicionarEstoque}>
                <Ionicons name="add-outline" size={22} color="#FFF"></Ionicons>
              </TouchableOpacity>
            </View>
          </View>

          <View style={dashboardStyle.boxMensagem}>
            <Image
              source={require("./assets/acaiEstoque.png")}
              style={dashboardStyle.imgMensagem}
            ></Image>

            <View>
              <Text>Açai com banana</Text>
              <Text style={estoqueStyle.valorEstoque}>R$ 10</Text>
            </View>

            <View style={estoqueStyle.boxContEstoque}>
              <TouchableOpacity style={estoqueStyle.btnDiminuirEstoque}>
                <Ionicons
                  name="remove-outline"
                  size={22}
                  color="#6B50F6"
                ></Ionicons>
              </TouchableOpacity>

              <span style={estoqueStyle.qtdEstoque}>17</span>

              <TouchableOpacity style={estoqueStyle.btnAdicionarEstoque}>
                <Ionicons name="add-outline" size={22} color="#FFF"></Ionicons>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>

      <View
        style={[
          menuStyle.addProduto,
          { position: "absolute", bottom: 20, right: 20 },
        ]}
      >
        <Ionicons name="add-outline" size={20} color="#FFF" />
      </View>
    </View>
  );
}

export function VisualizarPerfilScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SafeAreaView>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <View style={visualizarPerfilStyle.containerPerfil}>
            <Text style={visualizarPerfilStyle.titleVisualizarPerfil}>Detalhes do Perfil</Text>
              <View style={visualizarPerfilStyle.boxVisualizarFoto}>
                <Image
                  source={require("./assets/fotoPerfil.png")}
                  style={visualizarPerfilStyle.fotoVisualizarPerfil}
                ></Image>
                <TouchableOpacity style={visualizarPerfilStyle.trocarImagem}>Trocar Imagem</TouchableOpacity>
              </View>

              <Text style={visualizarPerfilStyle.titlePerfil}>Informações</Text>

              <View style={visualizarPerfilStyle.boxInput50}>
                <TextInput
                  placeholder="Nome: "
                  autoCapitalize="words"
                  placeholderTextColor="gray"
                  style={visualizarPerfilStyle.input50}
                ></TextInput>
                <TextInput
                  placeholder="Sobrenome: "
                  autoCapitalize="words"
                  placeholderTextColor="gray"
                  style={visualizarPerfilStyle.input50}
                ></TextInput>
              </View>

              <View style={visualizarPerfilStyle.boxInput100}>
                <TextInput
                  placeholder="Email: "
                  keyboardType="email-address"
                  placeholderTextColor="gray"
                  style={visualizarPerfilStyle.input100}
                ></TextInput>
              </View>

              <View style={visualizarPerfilStyle.boxInput100}>
                <TextInput
                  placeholder="Senha: "
                  secureTextEntry={true}
                  placeholderTextColor="gray"
                  style={visualizarPerfilStyle.input100}
                ></TextInput>
              </View>

              <View style={visualizarPerfilStyle.boxInput50}>
                <TextInput
                  placeholder="DD/MM/AAAA: "
                  keyboardType="number-pad"
                  placeholderTextColor="gray"
                  style={visualizarPerfilStyle.input50}
                ></TextInput>
                <TextInput
                  placeholder="Telefone: "
                  keyboardType="number-pad"
                  placeholderTextColor="gray"
                  style={visualizarPerfilStyle.input50}
                ></TextInput>
              </View>

              <View style={visualizarPerfilStyle.boxInput50}>
                <TextInput
                  placeholder="Cargo: "
                  autoCapitalize="words"
                  placeholderTextColor="gray"
                  style={visualizarPerfilStyle.input50}
                ></TextInput>
                <TextInput
                  placeholder="Salário: "
                  keyboardType="number-pad"
                  placeholderTextColor="gray"
                  style={visualizarPerfilStyle.input50}
                ></TextInput>
              </View>

              <View style={visualizarPerfilStyle.boxInput50}>
                <TextInput
                  placeholder="Cidade: "
                  autoCapitalize="words"
                  placeholderTextColor="gray"
                  style={visualizarPerfilStyle.input50}
                ></TextInput>
                <TextInput
                  placeholder="Estado: "
                  autoCapitalize="characters"
                  placeholderTextColor="gray"
                  style={visualizarPerfilStyle.input50}
                ></TextInput>
              </View>

              <View style={visualizarPerfilStyle.boxInput50}>
                <TextInput
                  placeholder="CEP: "
                  keyboardType="number-pad"
                  placeholderTextColor="gray"
                  style={visualizarPerfilStyle.input50}
                ></TextInput>
                <TextInput
                  placeholder="Endereço: "
                  autoCapitalize="words"
                  placeholderTextColor="gray"
                  style={visualizarPerfilStyle.input50}
                ></TextInput>
              </View>

            <View style={visualizarPerfilStyle.btnEditarPerfil}>
              <TouchableOpacity
            style={visualizarMenuStyle.btnEditarMenu}
            onPress={() => navigation.navigate("editarPerfil")}
            >
            Editar
            </TouchableOpacity>
            </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

export function EditarPerfilScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SafeAreaView>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <View style={visualizarPerfilStyle.containerPerfil}>
            <Text style={visualizarPerfilStyle.titleVisualizarPerfil}>Editar o Perfil</Text>
              <View style={visualizarPerfilStyle.boxVisualizarFoto}>
                <Image
                  source={require("./assets/fotoPerfil.png")}
                  style={visualizarPerfilStyle.fotoVisualizarPerfil}
                ></Image>
                <TouchableOpacity style={visualizarPerfilStyle.trocarImagem}>Trocar Imagem</TouchableOpacity>
              </View>

              <Text style={visualizarPerfilStyle.titlePerfil}>Informações</Text>

              <View style={visualizarPerfilStyle.boxInput50}>
                <TextInput
                  placeholder="Nome: "
                  autoCapitalize="words"
                  placeholderTextColor="gray"
                  style={visualizarPerfilStyle.input50}
                ></TextInput>
                <TextInput
                  placeholder="Sobrenome: "
                  autoCapitalize="words"
                  placeholderTextColor="gray"
                  style={visualizarPerfilStyle.input50}
                ></TextInput>
              </View>

              <View style={visualizarPerfilStyle.boxInput100}>
                <TextInput
                  placeholder="Email: "
                  keyboardType="email-address"
                  placeholderTextColor="gray"
                  style={visualizarPerfilStyle.input100}
                ></TextInput>
              </View>

              <View style={visualizarPerfilStyle.boxInput100}>
                <TextInput
                  placeholder="Senha: "
                  secureTextEntry={true}
                  placeholderTextColor="gray"
                  style={visualizarPerfilStyle.input100}
                ></TextInput>
              </View>

              <View style={visualizarPerfilStyle.boxInput50}>
                <TextInput
                  placeholder="DD/MM/AAAA: "
                  keyboardType="number-pad"
                  placeholderTextColor="gray"
                  style={visualizarPerfilStyle.input50}
                ></TextInput>
                <TextInput
                  placeholder="Telefone: "
                  keyboardType="number-pad"
                  placeholderTextColor="gray"
                  style={visualizarPerfilStyle.input50}
                ></TextInput>
              </View>

              <View style={visualizarPerfilStyle.boxInput50}>
                <TextInput
                  placeholder="Cargo: "
                  autoCapitalize="words"
                  placeholderTextColor="gray"
                  style={visualizarPerfilStyle.input50}
                ></TextInput>
                <TextInput
                  placeholder="Salário: "
                  keyboardType="number-pad"
                  placeholderTextColor="gray"
                  style={visualizarPerfilStyle.input50}
                ></TextInput>
              </View>

              <View style={visualizarPerfilStyle.boxInput50}>
                <TextInput
                  placeholder="Cidade: "
                  autoCapitalize="words"
                  placeholderTextColor="gray"
                  style={visualizarPerfilStyle.input50}
                ></TextInput>
                <TextInput
                  placeholder="Estado: "
                  autoCapitalize="characters"
                  placeholderTextColor="gray"
                  style={visualizarPerfilStyle.input50}
                ></TextInput>
              </View>

              <View style={visualizarPerfilStyle.boxInput50}>
                <TextInput
                  placeholder="CEP: "
                  keyboardType="number-pad"
                  placeholderTextColor="gray"
                  style={visualizarPerfilStyle.input50}
                ></TextInput>
                <TextInput
                  placeholder="Endereço: "
                  autoCapitalize="words"
                  placeholderTextColor="gray"
                  style={visualizarPerfilStyle.input50}
                ></TextInput>
              </View>

            <View style={visualizarPerfilStyle.btnEditarPerfil}>
              <TouchableOpacity
            style={visualizarMenuStyle.btnEditarMenu}
            onPress={() => navigation.navigate("editarMenu")}
            >
            Editar
            </TouchableOpacity>
            </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

export function FuncionarioScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#F4F8FF" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SafeAreaView>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <View style={menuStyle.boxTopoMenu}>
              <Text style={menuStyle.tituloMenu}>Funcionários</Text>
              <View style={dashboardStyle.containerEstatisticas}>
                <View style={menuStyle.boxEstatisticasMenu}>
                  <Ionicons name="people" size={25} color="#FFF" />
                  <span>2</span>
                  <span style={dashboardStyle.txtBoxEstatisticas}>
                    Funcionários
                  </span>
                </View>

                <View style={menuStyle.boxEstatisticasMenu}>
                  <Ionicons name="logo-usd" size={25} color="#FFF" />
                  <span>R$ 8.290</span>
                  <span style={dashboardStyle.txtBoxEstatisticas}>
                    Valor em Pagamentos
                  </span>
                </View>

                <View style={menuStyle.boxEstatisticasMenu}>
                  <Ionicons name="eye-off" size={25} color="#FFF" />
                  <span>4</span>
                  <span style={dashboardStyle.txtBoxEstatisticas}>
                    Indisponíveis
                  </span>
                </View>
              </View>
            </View>

            <View style={menuStyle.buscarMenu}>
              <Ionicons name="search-outline" size={18} />
              <TextInput
                style={menuStyle.titleBuscarMenu}
                placeholder="Buscar"
              />
            </View>

            <View style={funcionarioStyle.containerFuncionarios}>
              <View style={funcionarioStyle.boxFuncionario}>
                <Image source={require("./assets/funcionarioAna.png")}></Image>
                <View style={funcionarioStyle.boxNomeFuncionario}>
                  <Text style={funcionarioStyle.nomeFuncionario}>Ana</Text>
                </View>
              </View>

              <View style={funcionarioStyle.boxFuncionario}>
                <Image source={require("./assets/funcionarioJoao.png")}></Image>
                <View style={funcionarioStyle.boxNomeFuncionario}>
                  <Text style={funcionarioStyle.nomeFuncionario}>João</Text>
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>

      <View
        style={[
          menuStyle.addProduto,
          { position: "absolute", bottom: 20, right: 20 },
        ]}
      >
        <Ionicons name="add-outline" size={20} color="#FFF" />
      </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTab({route}) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Início"
        component={DashboardScreen}
          initialParams={{ idAdministrador: route.params.idAdministrador }}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="document-text-outline" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Estoque"
        component={EstoqueScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="swap-vertical-outline" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Funcionários"
        component={FuncionarioScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" color={color} size={size} />
          ),
        }}
      />

      {/* <Tab.Screen name="Início" component={DashboardScreen} options={{ headerShown: false, tabBarIcon: ({ color, size }) => <Ionicons name='home-outline' color={color} size={size} />
       }} /> */}
    </Tab.Navigator>
  );
}

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EsqueciSenha"
        component={EsqueciSenhaScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="dashboard"
        component={MyTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Menu"
        component={MyTab}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="VisualizarMenu"
        component={VisualizarMenuScreen}
      />
      <Stack.Screen
        name="Estoque"
        component={MyTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="visualizarPerfil"
        component={VisualizarPerfilScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="editarPerfil"
        component={EditarPerfilScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Funcionários"
        component={MyTab}
        options={{ headerShown: false }}
      />

<Stack.Screen
        name="editarMenu"
        component={EditarMenuScreen}
        options={{ headerShown: false }}
      />
    
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
