import http from "../http-common";

class DataService {
  creates(data) {
    return http.post("/register", data);
  }
}

export default new DataService();
