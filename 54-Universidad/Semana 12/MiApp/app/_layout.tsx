import React, { useState } from "react";
import { Text, TextInput, Alert, View, StyleSheet, Button, ScrollView } from 'react-native';

type User = { nombre: string; correo: string };

export default function MyComponent() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  const handleSave = () => {
    // Validación básica
    if (!nombre.trim() || !correo.trim() || !contrasena.trim()) {
      Alert.alert("Error", "Por favor complete todos los campos.");
      return;
    }

    // Añadir a la lista de usuarios (sólo guardamos nombre y correo por simplicidad)
    setUsers(prev => [{ nombre: nombre.trim(), correo: correo.trim() }, ...prev]);

    // Limpiar campos
    setNombre("");
    setCorreo("");
    setContrasena("");

    // Confirmación
    Alert.alert("Guardado", "Usuario guardado correctamente.");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Formulario de Registro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={contrasena}
        onChangeText={setContrasena}
        secureTextEntry
      />

      <View style={styles.buttonContainer}>
        <Button title="Guardar" onPress={handleSave} />
      </View>

      <Text style={styles.outputHeader}>Lista de Usuarios:</Text>
      {users.length === 0 ? (
        <Text style={styles.output}>(No hay usuarios guardados)</Text>
      ) : (
        users.map((u, idx) => (
          <View key={idx} style={styles.userRow}>
            <Text style={styles.userName}>{u.nombre}</Text>
            <Text style={styles.userEmail}>{u.correo}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 44,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 12,
    backgroundColor: '#fff'
  },
  buttonContainer: {
    marginTop: 8,
    marginBottom: 12,
  },
  outputHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
  },
  output: {
    marginTop: 8,
    color: '#666',
  },
  userRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  userName: {
    fontSize: 16,
  },
  userEmail: {
    fontSize: 14,
    color: '#555',
  },
});
