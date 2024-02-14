import axios from "axios";

const URL = process.env.REACT_APP_URL;
const PATH_DEFAULT = "/api/v1/mrplato/operations"


export const restart_session = async () => {
    // Obtendo os cookies do navegador
    

    const config = {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            // Adicionando os cookies ao cabeçalho Cookie
        },
      withCredentials: true
    };

    try {
        const res = await axios.get(URL + PATH_DEFAULT + "/delete_session/", config);
        // Lide com a resposta, se necessário
    } catch (err) {
        // Lide com erros, se necessário
    }
};
