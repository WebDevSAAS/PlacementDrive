import http from "../http-common";

class DataService {
  creates(data) {
    return http.post("/register", data);
  }

  update(id, data) {
    return http.put(`/update/${id}`, data);
  }

  get(id) {
    return http.get(`/${id}`);
  }
}

export default new DataService();
