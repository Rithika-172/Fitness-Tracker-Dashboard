import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on app start
    const savedUser = localStorage.getItem('fitTracker_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password, name) => {
    // Simulate login - in real app, this would be an API call
    try {
      const userData = {
        id: Date.now(),
        email,
        name: name || email.split('@')[0],
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name || email)}&background=1976d2&color=fff`,
        joinDate: new Date().toISOString(),
      };
      
      setUser(userData);
      localStorage.setItem('fitTracker_user', JSON.stringify(userData));
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const signup = async (email, password, name) => {
    // Simulate signup - in real app, this would be an API call
    return login(email, password, name);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('fitTracker_user');
  };

  const value = {
    user,
    login,
    signup,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};