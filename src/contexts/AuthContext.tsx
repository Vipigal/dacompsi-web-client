import { ReactNode, createContext, useEffect, useState } from "react";
import { User } from "../interfaces/User";
import { api } from "../utils/api";
import { jwtDecode } from "jwt-decode";
import { JwtPayloadUser } from "../pages/Login";

interface Props {
  children?: ReactNode;
}

interface IAuthContext {
  authenticated: boolean;
  setAuthenticated: (newState: boolean) => void;
  user?: User;
  setUser?: (newState: User) => void;
}

const initialValue: IAuthContext = {
  authenticated: false,
  setAuthenticated: () => {},
};

const AuthContext = createContext<IAuthContext>(initialValue);

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(
    initialValue.authenticated
  );
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    const validateToken = async () => {
      try {
        const response = await api.get("/users/validateToken", {
          withCredentials: true,
        });

        if (response && response.data) {
          const jwt = jwtDecode(response.data) as JwtPayloadUser;
          setUser(jwt.user);
					setAuthenticated(true)
        }
      } catch (e) {
				setAuthenticated(false)
      }
    };
    validateToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{ authenticated, setAuthenticated, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};



export { AuthContext, AuthProvider };
