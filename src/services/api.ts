import axios from "axios";
import { TypeCustomer } from "../type/customer";
import { TypeShippingRatesAdd } from "../type/shipping";

const axiosApi = axios.create({
  baseURL: `${process.env.REACT_APP_URL}`,
});

// customer
export const readAllCustomer = () => {
  return axiosApi.get("/api/customer");
};

export const readOneCustomer = (id: number | undefined) => {
  return axiosApi.get(`/api/customer/${id}`);
};

export const postCustomer = (data: TypeCustomer) => {
  return axiosApi.post("/api/customer", data);
};
export const EditCustomer = (id: number | undefined, data: TypeCustomer) => {
  return axiosApi.post(`/api/customer/${id}`, data);
};

export const deleteCustomer = (id: number | undefined) => {
  return axiosApi.delete(`/api/customer/${id}`);
};

// alamat
export const readAllAlamat = () => {
  return axiosApi.get("/api/alamat");
};

// shipping rates
export const readAllShipping = () => {
  return axiosApi.get("/api/shipping");
};

export const postShipping = (data: TypeShippingRatesAdd) => {
  return axiosApi.post("/api/shipping", data);
};
