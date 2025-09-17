// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function LoginScreen({ onLoginSuccess }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleLogin = () => {
    // Exemplo simples de validação de login.
    // Em um app real, você faria uma chamada de API.
    if (usuario === 'admin' && senha === '123') {
      onLoginSuccess();
    } else {
      setErro('Usuário ou senha incorretos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={usuario}
        onChangeText={setUsuario}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      {erro ? <Text style={styles.erro}>{erro}</Text> : null}
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  erro: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});