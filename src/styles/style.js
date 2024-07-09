import reactDom from "react-dom";

export const loginStyle = ({

  container: {
    flex: 1,
    position: 'relative',
  },

  boxFundo: {
    width: '100%',
    height: '30%',
    color: 'white',
  },
 
  img: {
    position: 'relative',
    width: '100%',
    height: 280,
  },
 
  txtFundo: {
    position: 'absolute',
    top: '50%',
    left: '5%',
    fontSize: 15,
    fontWeight: 'normal',
    color: '#fff',
    fontFamily: 'Roboto_400Regular',
    width: '60%',
    fontSize: 15,
  },
 
  spanFundo: {
    fontSize: 25,
    color: '#fff',
    fontFamily: 'Roboto_700Bold',
  },
 
  container2: {
    backgroundColor: 'white',
    height: '70%',
    textAlign: 'center',
    marginTop: 30,
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 25,
    width: '100%',
  },
 
  txtLogin: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 30,
    marginBottom: 20,
    marginTop: 20,
    fontWeight: 600,
    color: '#8A19D6',
    textAlign: 'center',
    },
 
  btnLogin: {
    width: '80%',
    height: 50,
    padding: 10,
    borderRadius: 30,
    marginTop: 20,
    border: 'none',
    backgroundColor: 'blue',
    alignSelf: 'center',
    backgroundColor: '#8A19D6',
    fontFamily:  'Roboto_700Bold',
  },

  entrarLogin: {
    color: 'white',
    textAlign: 'center',
    marginTop: 5,
    fontFamily:  'Roboto_700Bold',
  },
  inputContainer: {
    flexDirection: 'row',
    width: '80%',
    height: 50,
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#64748B',
    borderRadius: 30,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
    color: '#8A19D6',
  },
  TextInput: {
    flex: 1,
    height: 40,
    color: '#000',
    backgroundColor: 'transparent',
    outline: 'none',
  },
 
  txtForgetPassword: {
    color: '#8A19D6',
    fontFamily: 'Roboto_700Bold',
    textAlign: 'end',
    marginRight: 50,
    marginTop: 20,
  },  

  txtcodeForge: {
    color: '#64748B',
    textAlign: 'center',
    marginTop: 35,
 },

  errorModalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },

  errorModalTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },

  errorModalButtonText: {
    display: 'flex',
    width: '15rem',
    padding: 10,
    borderRadius: 30,
    marginTop: 20,
    border: 'none',
    color: '#fff',
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#8A19D6',
    fontFamily:  'Roboto_700Bold',
  },
});

export const dashboardStyle = ({
  topDashContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '5%',
    paddingRight: '5%',
  },

   topDashInfo: {
     display: 'flex',
     flexDirection: 'row',
   },

  btnNotificacao: {
    backgroundColor: '#8A19D6',
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  nomeDash: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 22,
    color: '#03314B',
    fontFamily: 'Roboto_700Bold',
   },

  cargoDash: {
    color: '#8C8C8C',
    fontFamily: 'Roboto_400Regular',
  },

  bannerDash: {
    backgroundColor: '#B66DFF',
    width: '90%',
    height: 155,
    borderRadius: 15,
    marginTop: 40,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnBanner: {
    backgroundColor: '#8A19D6',
    width: 130,
    height: 45,
    borderRadius: 15,
    marginTop: 20,
  },

  txtBtnBanner: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'Roboto_700Bold',
  },

  txtBanner: {
    color: 'white',
    fontFamily: 'Roboto_400Regular',
  },

  spanBanner: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 25,
    color: 'white',
  },

  tituloEstatisticas: {
    textAlign: 'left',
    justifyContent: 'left',
    alignItems: 'left',
    color: 'red',
  },

  containerEstatisticas: {
    width: '90%',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  boxEstatisticas: {
    width: '30%',
    height: 100,
    backgroundColor: '#8A19D6',
    borderRadius: 15,
    border: 'none',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxTituloEstatisticas: {
    textAlign: 'left',
    width: '90%',
    marginTop: 30,
    marginBottom: 10,
  },

  tituloEstatisticas: {
    fontSize: 22,
    color: '#03314B',
    fontFamily: 'Roboto_700Bold',
  },

  txtBoxEstatisticas: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Roboto_400Regular',
  },

  boxTituloMensagem: {
    textAlign: 'left',
    width: '90%',
    marginTop: 30,
    marginBottom: 10,
    color: '#03314B',
  },

  tituloMensagem: {
    fontSize: 22,
    color: '#03314B',
    fontFamily: 'Roboto_700Bold',
  },

  boxMensagem: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
    marginTop: '3%',
    alignItems: 'center',
  },

  boxMensagemInfo: {
    width: '75%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  imgMensagem: {
    marginRight: '5%',
  },

  nomeMensagem: {
    fontFamily: 'Roboto_700Bold',
    color: '#03314B',
  },

  assuntoMensagem: {
    fontFamily: 'Roboto_400Regular',
    color: '#8C8C8C',
  },

  horarioMensagem: {
    marginLeft: '10%',
    marginBottom: '5%',
    fontFamily: 'Roboto_700Bold',
    color: '#03314B',
  },

  boxhorarioMensagem: {
    width: '25%',
  },

  modalContainerConfig: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'left',
  },

  modalModalConfigTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
    backgroundColor: '#E2E8F0',
    padding: 20,
  },


});

export const menuStyle = ({
  tituloMenu: {
    fontSize: 22,
    fontWeight: 'bold', 
    marginTop: '5%',
    color: 'white',
    textAlign: 'center',
    marginBottom: '5%',
    fontFamily: 'Roboto_700Bold',
  },

  buscarMenuContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    marginTop: '10%',
  },
  buscarMenu: {
    backgroundColor: '#fff',
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    height: 50,
    borderRadius: 10,
  },
  btnFiltroMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8A19D6',
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  titleBuscarMenu: {
    marginLeft: 10,
    flex: 1, 
  },

  menuContainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F4F8FF',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },

  boxMenu: {
    backgroundColor: '#fff',
    width: 105,
    height: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '5%',
    marginTop: '10%',
  },

  boxMenuActive: {
    backgroundColor: '#8A19D6',
    width: 105,
    height: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '5%',
    marginTop: '10%',
  },

  txtBoxMenuActive: {
    color: 'white',
    marginTop: 5,
  },

  txtBoxMenu: {
    color: '#8A19D6',
    marginTop: 5,
  },

  imgSemEstoque: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%', 
  },

  addProduto: {
    width: 50,
    height: 50,
    backgroundColor: '#8A19D6',
    borderRadius: 25, 
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '5%',
    right: '5%',
  },

  boxTopoMenu: {
    backgroundColor: '#8A19D6',
    width: '100%',
    height: 250,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxEstatisticasMenu: {
    width: 100,
    height: 100,
    color: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  txtBoxEstatisticasMenu: {
    color: 'white',
    fontFamily: 'Roboto_400Regular',
  },
  containerEstatisticasMenu: {
    height: 120,
    width: '90%',
    backgroundColor: '#922ADE',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 0, 
  },
  containerMainmenu: {
    width: '90%',
    backgroundColor: 'white',
    padding: 20,
    marginTop: '5%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },

  boxContainerMenu: {

    marginBottom: '5%',
    flexDirection: 'row',
  },
  imagemSemResultado: {
    width: 100,
    height: 100,
  },
  cardImgMenu: {
    position: 'relative',
  },

  precoMenu: {
    backgroundColor: '#8A19D6',
    paddingTop: 7,
    paddingBottom: 7,
    position: 'absolute',
    top: 0,
    width: '60%',
    left: '40%',
    textAlign: 'center',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    fontFamily: 'Roboto_400Regular',
  },

  cardMenu: {
    width: '65%',
    justifyContent: 'center',
    padding: 10, 
  },

  tituloCardMenu: {
    fontWeight: 'bold',
    marginBottom: 5, 
    fontFamily: 'Roboto_700Bold',
  },

  descricaoCardMenu: {
    color: 'gray',
    fontFamily: 'Roboto_400Regular',
  },

  btnCardMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10, 
    width: '100%',
    justifyContent: 'space-between',
  },

  btnSetaMenu: {
    backgroundColor: '#8A19D6',
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
    width: 25,
    borderRadius: 12.5, 
  },

  iconAcaiMenu: {
    backgroundColor: '#F7EBFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
  },
});

export const visualizarMenuStyle = ({
  containerVisualizarMenu: {
    position: 'relative',
  },
  containerVoltarBtn: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
  },


  nomeProdutoMenu: {
    textAlign: 'left',
  },

  boxImgVisualizarMenu: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5%',
    borderRadius: 20,
  },

  boxBtnVisualizarMenu: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5%',
  },

  precoVisualizarMenu: {
    backgroundColor: '#8A19D6',
    padding: 10,
    width: '30%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    textAlign: 'center',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
  },

  boxIcons: {
    flexDirection: 'row',
    marginBottom: '5%',
  },

  nomeProdutoMenu: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: '5%',
  },

  tituloDescricao: {
    fontSize: 18,
    marginBottom: '3%',
    fontWeight: '500',
  },

  textoDescricao: {
    color: '#8C8C8C'
  },

  iconAcaiVisualizarMenu: {
    backgroundColor:'#F7EBFF',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    marginRight: '5%'
  },

  btnEditarMenu: {
    width: '100%',
    backgroundColor: '#8A19D6',
    padding: 15,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    color: 'white',
    marginTop: '20%',
  },
});

export const editarMenuStyle = ({
  containerEditarMenu: {
  },
  alterarImgEditarMenu: {
    backgroundColor: '#8A19D6',
    paddingTop: 7,
    paddingBottom: 7,
    position: 'absolute',
    borderRadius: 10,
    top: '50%',
    width: '40%',
    textAlign: 'center',
    color: 'white',
    justifyContent: 'center',
    fontFamily: 'Roboto_400Regular',
  },

  inputContainer: {
    marginTop: '10%',
    height: '80%',
  },

  inputNomeEditar:{
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    marginTop: 15,
    paddingLeft: 10,
    alignSelf: 'left',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    fontFamily:  'Roboto_400Regular',
    paddingLeft: 15,
    borderRadius: 10,
    fontFamily: 'Roboto_400Regular',
  },

  inputDescricaoEditar: {
    width: '100%',
    // height: 200,
    backgroundColor: 'white',
    marginTop: 15,
    padding: 15,
    alignSelf: 'left',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    fontFamily:  'Roboto_400Regular',
    paddingLeft: 15,
    borderRadius: 10,
    fontFamily: 'Roboto_400Regular',
  },

  selectMenu: {
    height: 50,
    borderRadius: 15,
    marginTop: '5%',
    border: 'none',
    padding: 10,
    fontSize: 16,
    color: 'gray',
    fontFamily: 'Roboto_400Regular',
  },

  containarBtn:{
    flexDirection: 'row',
    marginTop: '5%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },


  btnCancelar: {
    width: '50%',
    padding: 15,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#8A19D6',
    fontFamily: 'Roboto_700Bold',
  },

  btnSalvar: {
    backgroundColor: '#8A19D6',
    width: '50%',
    padding: 15,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    color: 'white',
    fontFamily: 'Roboto_700Bold',
  },
});

export const estoqueStyle = ({
  valorEstoque: {
    color: '#8A19D6',
    fontWeight: 'bold',
  },

  boxContEstoque: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: '5%'
  },

  btnDiminuirEstoque: {
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: '#F1ECFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnAdicionarEstoque: {
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: '#8A19D6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  qtdEstoque: {
    margin: 10,
    fontSize: 18,
  },

  addProdutoEstoque: {
    width: 50,
    height: 50,
    backgroundColor: '#8A19D6',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '-58%',
    right: '5%',
  },
});

export const visualizarPerfilStyle = ({
  fotoVisualizarPerfil: {
    width: 120,
    height: 120,
  },

  boxVisualizarFoto: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerPerfil: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    borderColor: 'white',
    margintop: '5%'
  },

  titlePerfil: {
    marginLeft: 15,
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 5,
  },

  boxInput50: {
    flexDirection: 'row',
    justifyContent: 'center'
  },

  input50:{
    borderWidth: 1,
    borderColor: 'gray',
    width: '45%',
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },

  boxInput100: {
    flexDirection: 'row',
    justifyContent: 'center'
  },

  input100: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '92%',
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },

  cancelarPerfil: {
    width: '100%',
    height: 100,
  },

  boxFundo: {
    width: '100%',
    color: 'white',
  },

  imgFundo: {
    width: '100%',
    height: 400,
  },

  titleVisualizarPerfil: {
    textAlign: 'center',
    color: '#03314B',
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: '3%',
  },

  trocarImagem: {
    textAlign: 'center',
    color: '#8A19D6',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: '3%'
  },

  btnEditarPerfil: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

});

export const funcionarioStyle = ({
  containerFuncionarios: {
    padding: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',  
  },

  boxFuncionario: {
    height: 'min-content',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5%',
  },

  nomeFuncionario: {
    color: '#03314B',
    fontSize: '22',
    alignItems: 'center',
    fontWeight: '600'
  },

  boxNomeFuncionario: {
    marginTop: '10%'
  },
});

