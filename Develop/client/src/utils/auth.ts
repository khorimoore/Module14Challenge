import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    const token = localStorage.getItem('token');
    if (token) {
      return jwtDecode (token);
    }
    return null;
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    const token = localStorage.getItem('token');
    return !!token && !this.isTokenExpired(token);
  }
  
  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    try {
      const { exp } = jwtDecode<JwtPayload>(token);
      if (exp) {
        return Date.now() >= exp * 1000;
      }
      return true;
   } catch (e) {

      return true;
    }
  }

  getToken(): string | null {
    // TODO: return the token
    return localStorage.getItem('token');

  }

  login(idToken: string) {
    // TODO: set the token to localStorage
localStorage.setItem('token', idToken);
window.location.assign('/home');
  }

    // TODO: redirect to the home page
    logout() {
      localStorage.removeItem('token');
      window.location.assign('/login');
    }
}

export default new AuthService();
