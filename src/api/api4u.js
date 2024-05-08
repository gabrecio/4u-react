
const BASE_URL = 'http://api.4uerp.com/api'; // Reemplaza esto con la URL de tu API REST

const getUsers = async (organizationId) => {
  try {
    const response = await fetch(`${BASE_URL}/User/GetAll?organizationId=${organizationId}`);
    if (!response.ok) {
      throw new Error('Error fetching users');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

const getUserById = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/User/${userId}`);
    if (!response.ok) {
      throw new Error(`Error fetching user with ID ${userId}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching user with ID ${userId}:`, error);
    throw error;
  }
};

const createUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/User`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error('Error creating user');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

// Agrega más funciones para otros endpoints de usuarios según sea necesario

export { getUsers, getUserById, createUser };
