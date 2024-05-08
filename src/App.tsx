import {
  Admin,
  Resource
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import Users from './components/users';

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>  
 <Resource
      name="users"
      list={Users}
    />
  </Admin>
);
