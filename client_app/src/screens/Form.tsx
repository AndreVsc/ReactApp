import React, { useState } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { Logo } from '../components/Logo/Logo'; // Import Logo component
import { Button } from '../components/Button/Button'; // Import Button component
import { Inputs } from '../components/Inputs/Inputs'; // Import Inputs component
import { styles } from './FormStyle'; // Import styles from FormStyle module
import api from '../api/config'; // Import API instance from config module

export function Form() {
  // Declare state variables to manage form data
  const [nome, setNome] = useState('');
  const [setor, setSetor] = useState('');
  const [ocorrencia, setOcorrencia] = useState('');
  const [caso, setCaso] = useState<string[]>([]); // Array to store selected cases
  const [casoEspecifico, setCasoEspecifico] = useState('');
  const [prioridade, setPrioridade] = useState('');
  const [urgencia, setUrgencia] = useState('');
  const [isCheck, setIsCheck] = useState(false);

  // Handle form submission
  const handleSubmit = async () => {
    // Validate required fields
    if (!nome || !setor || !ocorrencia || caso.length === 0 || !prioridade || !urgencia || !isCheck) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Prepare form data object
    const formData = {
      nome,
      setor,
      ocorrencia,
      caso: caso.join(', '), // Join selected cases into a comma-separated string
      casoEspecifico,
      classe: {
        prioridade,
        urgencia,
      },
      check: isCheck,
    };

    // Try sending form data to the backend API
    try {
      const response = await api.post('/chamado', formData); // Use API instance to make POST request
      console.log(response); // Log response for debugging

      // Handle successful submission
      if (response.status === 201) {
        Alert.alert('Sucesso', 'Formulário enviado com sucesso!');
        // Reset form fields
        setNome('');
        setSetor('');
        setOcorrencia('');
        setCaso([]);
        setCasoEspecifico('');
        setPrioridade('');
        setUrgencia('');
        setIsCheck(false);
      } else {
        console.error('Error submitting form:', response.data?.message); // Log error message
        Alert.alert('Erro', 'Falha ao enviar o formulário. Tente novamente.');
      }
    } catch (error) {
      console.error('Error submitting form:', error); // Log error object
      Alert.alert('Erro', 'Falha ao enviar o formulário. Tente novamente.');
    }
  };

  // Render the form components
  return (
    <>
      {/* Logo container with shadow effect */}
      <View style={[styles.logoContainerForm, styles.shadow]}>
        <Logo />
      </View>

      {/* Scrollable container for form inputs */}
      <ScrollView style={styles.scrollContainerForm}>
        {/* Inputs component to handle form fields */}
        <Inputs
          nome={nome}
          setNome={setNome}
          setor={setor}
          setSetor={setSetor}
          ocorrencia={ocorrencia}
          setOcorrencia={setOcorrencia}
          caso={caso}
          setCaso={setCaso}
          casoEspecifico={casoEspecifico}
          setCasoEspecifico={setCasoEspecifico}
          prioridade={prioridade}
          setPrioridade={setPrioridade}
          urgencia={urgencia}
          setUrgencia={setUrgencia}
          isCheck={isCheck}
          setIsCheck={setIsCheck}
        />
      </ScrollView>

      {/* Button container with shadow effect */}
      <View style={[styles.buttonContainerForm, styles.shadow]}>
        {/* Button component to handle form submission */}
        <Button text={'Enviar'} handleButton={handleSubmit} />
      </View>
    </>
  );
}
