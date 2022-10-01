export interface User_login {
  email: string;
  password: string;
}

export interface User_signup {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  interest?: string[];
}
