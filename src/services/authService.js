// src/services/AuthService.js
export const AuthService = {
  // Registrar usuario
  register: (userData) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (users.find(u => u.email === userData.email)) {
      throw new Error('El correo ya está registrado');
    }

    const newUser = {
      id: Date.now(),
      name: userData.name,
      email: userData.email,
      password: userData.password,
      phone: '',
      location: 'Ciudad de México, México',
      company: '',
      bio: '',
      avatar: null,
      memberSince: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    return newUser;
  },

  // Iniciar sesión
  login: (email, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
      throw new Error('Credenciales incorrectas');
    }

    localStorage.setItem('currentUser', JSON.stringify(user));
    return user;
  },

  // Obtener usuario actual
  getCurrentUser: () => {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  },

  // Actualizar usuario
  updateUser: (updatedData) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const currentUser = AuthService.getCurrentUser();
    
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...updatedData };
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(users[userIndex]));
      return users[userIndex];
    }
    throw new Error('Usuario no encontrado');
  },

  // Cerrar sesión
  logout: () => {
    localStorage.removeItem('currentUser');
  },

  // Cambiar contraseña
  changePassword: (oldPassword, newPassword) => {
    const currentUser = AuthService.getCurrentUser();
    
    if (currentUser.password !== oldPassword) {
      throw new Error('Contraseña actual incorrecta');
    }

    return AuthService.updateUser({ password: newPassword });
  }
};