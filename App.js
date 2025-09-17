// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importe os componentes das telas que você criou
import LoginScreen from './LoginScreen';
import ProdutosScreen from './ProdutosScreen';
import ConfiguracoesScreen from './ConfiguracoesScreen';

// Crie o navegador de abas
const Tab = createBottomTabNavigator();

// Componente que define a navegação das abas
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Produtos"
      screenOptions={{
        tabBarActiveTintColor: '#007bff',
      }}
    >
      <Tab.Screen
        name="Produtos"
        component={ProdutosScreen}
        options={{
          tabBarLabel: 'Produtos',
        }}
      />
      <Tab.Screen
        name="Configuracoes"
        component={ConfiguracoesScreen}
        options={{
          tabBarLabel: 'Configurações',
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <MyTabs />
      ) : (
        <LoginScreen onLoginSuccess={handleLoginSuccess} />
      )}
    </NavigationContainer>
  );
}