import axios from "axios";

const API_URL = "http://localhost:9000/auth";

class AuthService {
  loginWithGoogle() {
    window.open(`${API_URL}/facebook/redirect`, "_self");
    // window.location.href = `${API_URL}/google/login`;
  }

  // getRedirectedUser() {
  //   return axios.get(`${API_URL}/google/redirect`, { withCredentials: true });
  // }
}

export default new AuthService();
