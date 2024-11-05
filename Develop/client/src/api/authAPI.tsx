import { UserLogin } from "../interfaces/UserLogin";

  // TODO: make a POST request to the login route
  
const login = async (userInfo: UserLogin) => {
  try {
      const response = await fetch('http://localhost:3001/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(userInfo),
      });

      if (!response.ok) {
          throw new Error('Login failed');
      }

      const data = await response.json();
      // Assuming the response includes a JWT token, save it to local storage
      localStorage.setItem('token', data.token);

      return data;
  } catch (error) {
      console.error('Error logging in:', error);
      return null;
  }
};


export { login };
