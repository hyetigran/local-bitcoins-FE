import jwtDecode from "jwt-decode";

const Auth = {
  isAuthenticated() {
    const { token } = localStorage;
    if (!token) return false;
    const decoded = jwtDecode(token);
    if (
      !decoded ||
      !decoded.username ||
      !decoded.userId ||
      !decoded.iat ||
      !decoded.exp
    )
      return false;
    return decoded.exp > Date.now() / 1000;
  }
};

export default Auth;
