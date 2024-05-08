import React, { useState, useEffect } from 'react';
import { getUsers, getUserById } from '../api/api4u';
//import { List, Datagrid, TextField, EmailField } from "react-admin";

interface User {
  id: number;
  name: string;
  organizationId:  string;
    code:  string;
    lastName:  string;
    password:  string;
    domainUserName:  string;
    email:  string;
    buyerId: number;
    salespersonId: number;
    salespersonCode:  string;
    salespersonName:  string;
    buyerCode:  string;
    buyerName:  string;
    warehouseId: number;
    warehouseCode:  string;
    warehouseDescription:  string;
    authenticationToken:  string;
    lastLoginDate: Date;
    isSystem: boolean;
    isWarehouseUser: boolean;
    isWarehouseManager: boolean;
    isSalesManager: boolean;
    salesPersonBranchid: number;
    salesPersonBranchCode:  string;
    salesPersonBranchDescription:  string;
    warehouseBranchid: number;
    warehouseBranchCode: string;
    warehouseBranchDescription:  string;
    buyerBranchId: number;
    buyerBranchCode:  string;
    buyerBranchDescription:  string;
    branchId: number;
    branchCode:  string;
    branchDescription:  string;
    salesAssistantId: number;
    salesAssistantCode:  string;
    salesAssistantDescription:  string;
    lastDesktopVersion:  string;
    isSystemAdmin: boolean;
    isUserMobile: boolean;
    isActive: boolean;
    timestamp:  string;
    isReportAdmin: boolean;
    userRoles: string[];
    //userWarehouseSecurities: [];
    isSelected: boolean;
    isDuplicated: boolean;
    isForUpdate: boolean;
    errorNotes: string;
    lineNumber: number;
    keyCode:  string;
}


const users = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getUsers(1); // Aquí pasamos el organizationId (por ejemplo, 1)
        setUsers(usersData);
      } catch (error) {
        // Manejar errores aquí
      }
    };

    fetchUsers();
  }, []);

  const handleSelectUser = async (userId: number) => {
    try {
      const user = await getUserById(userId);
      setSelectedUser(user);
    } catch (error) {
      // Manejar errores aquí
    }
  };

  return (
    <div className="list-page css-1yxnde1-RaList-root">
   <div className="RaList-main">
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Is Active</th>
            <th>Is Admin</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <tr key={user.id} onClick={() => handleSelectUser(user.id)}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.isSystemAdmin}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && (
        <div>        
          {/* Agrega más detalles del usuario según sea necesario 
            <h2>Detalles del Usuario</h2>
          <p>ID: {selectedUser.id}</p>
          <p>Nombre: {selectedUser.name}</p>
          <p>Apellido: {selectedUser.lastName}</p>
          <p>Email: {selectedUser.email}</p>
          <p>Fecha de Alta: {selectedUser.registrationDate}</p>
          <p>Teléfono: {selectedUser.phone}</p>*/}
        </div>
      )}
    </div>
    </div>
    </div>
  );
};

export default users;
