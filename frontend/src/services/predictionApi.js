import api from "./api";

export const predictDisease = async (data) => {

    const response = await api.post("/predict", data);

    return response.data;

};