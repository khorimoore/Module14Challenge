import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
    // Decode the JWT token to get the user's profile
    getProfile() {
        const token = this.getToken();
        if (token) {
            return jwtDecode<JwtPayload>(token);
        }
        return null;
    }

    // Check if the user is logged in by verifying the token's presence and validity
    loggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    // Check if the token is expired by comparing its expiry time to the current time
    isTokenExpired(token: string): boolean {
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

    // Get the JWT token from local storage
    getToken(): string | null {
        return localStorage.getItem('token');
    }

    // Set the JWT token in local storage and redirect to the home page
    login(idToken: string) {
        localStorage.setItem('token', idToken);
        window.location.assign('/home');
    }

    // Remove the JWT token from local storage and redirect to the login page
    logout() {
        localStorage.removeItem('token');
        window.location.assign('/login');
    }
}

export default new AuthService();