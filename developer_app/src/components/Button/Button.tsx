import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';


import { styles } from './ButtonStyles';

interface PropsButton {
  handleButton: () => void; 
  text: string;
  disabled?: boolean; // Propriedade opcional para desabilitar o botão
}

export function Button({ handleButton, text, disabled }: PropsButton) {
  return (
    <Pressable
      style={[styles.button, disabled && styles.disabledButton]} // Aplicar estilos diferentes se desabilitado
      onPress={disabled ? undefined : handleButton} // Prevenir cliques se desabilitado
    >
      <Text style={styles.textButton}>{text}</Text>
    </Pressable>
  );
}
