export interface ILoginData {
  login: string;
  sublogin: string;
  password: string;
}

export const initialLoginData: ILoginData = {
  login: "",
  sublogin: "",
  password: "",
};

export interface IErrorResLogin {
  explain: string;
  id: string;
  request: {
    action: string;
    login: string;
    passwd: string;
    sublogin: string;
  };
}
