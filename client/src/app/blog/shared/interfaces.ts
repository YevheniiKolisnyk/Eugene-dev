export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface FbAuthResponse {
  idToken: string;
  expiresIn: string;
}

export interface blogPost {
  id?: string;
  title: string;
  content: string;
  author: string;
  date: Date;
}

export interface fbCreateResponse {
  name: string;
}
