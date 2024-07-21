import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Instancias o axios com o token de autenticação
const createAxiosInstance = async () => {
    const token = await AsyncStorage.getItem('userToken');
    return axios.create({
        baseURL: 'http://codegroupdev.com.br/suky/api',
        headers:{
            Authorization: `Bearer ${token}`,
        }
    });
};
export default createAxiosInstance;
