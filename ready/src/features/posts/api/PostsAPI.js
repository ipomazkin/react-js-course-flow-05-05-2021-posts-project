import { axiosInstance } from "../../../services/axios";

export function getList() {
  return axiosInstance.get('/Posts');
}

export function get(id) {
  return axiosInstance.get(`/Posts/${id}`);
}

export function create({ title = 'Test title', body = 'Test body' }) {
  return axiosInstance.post(`/Posts`, {
    title,
    body,
  });
}

export function update(id, { title = 'Test title', body = 'Test body' }) {
  return axiosInstance.put(`/Posts/${id}`, {
    title,
    body,
  });
}

export function remove(id) {
  return axiosInstance.delete(`/Posts/${id}`);
}
