import api from "./api";

export const getPredictionHistory = async () => {

    const response = await api.get("/predictions");

    return response.data;

};
/**
 * Get all prediction history
 */
export const getHistory = async () => {
  const response = await api.get("/history");
  return response.data;
};

/**
 * Delete prediction
 */
export const deleteHistory = async (id) => {
  const response = await api.delete(`/history/${id}`);
  return response.data;
};