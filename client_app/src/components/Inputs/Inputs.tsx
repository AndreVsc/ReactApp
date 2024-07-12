import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import CheckBox from 'react-native-check-box';
import { styles } from './InputsStyle';

// Opções para o campo de Caso
const opcoesCaso = [
  'Sistemas e Apps - Softwares',
  'Web Cam, Monitor, Teclado ou Mouse - Equipamentos',
  'Computador com problema - Hardware',
  'Rede Wi-fi ou Cabeamento - Internet',
  'Outros Problemas relacionados'
];

interface InputsProps {
  nome: string;
  setNome: React.Dispatch<React.SetStateAction<string>>;
  setor: string;
  setSetor: React.Dispatch<React.SetStateAction<string>>;
  ocorrencia: string;
  setOcorrencia: React.Dispatch<React.SetStateAction<string>>;
  caso: string[];
  setCaso: React.Dispatch<React.SetStateAction<string[]>>;
  casoEspecifico: string;
  setCasoEspecifico: React.Dispatch<React.SetStateAction<string>>;
  prioridade: string;
  setPrioridade: React.Dispatch<React.SetStateAction<string>>;
  urgencia: string;
  setUrgencia: React.Dispatch<React.SetStateAction<string>>;
  isCheck: boolean;
  setIsCheck: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Inputs(props: InputsProps) {
  const [selectedCaso, setSelectedCaso] = useState<string[]>(props.caso);
  const [showCasoEspecifico, setShowCasoEspecifico] = useState<boolean>(
    props.caso.includes('Outros Problemas relacionados')
  );

  const handleCasoChange = (opcao: string) => {
    let updatedCaso: string[];
    if (opcao === 'Outros Problemas relacionados') {
      updatedCaso = selectedCaso.includes(opcao)
        ? selectedCaso.filter(item => item !== opcao)
        : [...selectedCaso, opcao];
      setShowCasoEspecifico(!showCasoEspecifico);
    } else {
      updatedCaso = selectedCaso.includes(opcao)
        ? selectedCaso.filter(item => item !== opcao)
        : [...selectedCaso, opcao];
      setShowCasoEspecifico(false);
    }
    setSelectedCaso(updatedCaso);
    props.setCaso(updatedCaso);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          autoCapitalize="words"
          autoCorrect={false}
          value={props.nome}
          onChangeText={props.setNome}
        />
      </View>

      {/* Campo de Setor como Radio Buttons */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Setor</Text>
        <View style={styles.radioContainer}>
          <CheckBox
            isChecked={props.setor === 'Secretária - ADM'}
            onClick={() => props.setSetor('Secretária - ADM')}
          />
          <Text style={styles.radioLabel}>Secretária - ADM</Text>
        </View>
        <View style={styles.radioContainer}>
          <CheckBox
            isChecked={props.setor === 'Salas de Aulas Convencionais'}
            onClick={() => props.setSetor('Salas de Aulas Convencionais')}
          />
          <Text style={styles.radioLabel}>Salas de Aulas Convencionais</Text>
        </View>
        <View style={styles.radioContainer}>
          <CheckBox
            isChecked={props.setor === 'Sala de Docentes'}
            onClick={() => props.setSetor('Sala de Docentes')}
          />
          <Text style={styles.radioLabel}>Sala de Docentes</Text>
        </View>
        <View style={styles.radioContainer}>
          <CheckBox
            isChecked={props.setor === 'Laboratório'}
            onClick={() => props.setSetor('Laboratório')}
          />
          <Text style={styles.radioLabel}>Laboratório</Text>
        </View>
        <View style={styles.radioContainer}>
          <CheckBox
            isChecked={props.setor === 'Gerencia'}
            onClick={() => props.setSetor('Gerencia')}
          />
          <Text style={styles.radioLabel}>Gerência</Text>
        </View>
        <View style={styles.radioContainer}>
          <CheckBox
            isChecked={props.setor === 'Tecnico Pedagogico'}
            onClick={() => props.setSetor('Tecnico Pedagogico')}
          />
          <Text style={styles.radioLabel}>Técnico Pedagógico</Text>
        </View>
        <View style={styles.radioContainer}>
          <CheckBox
            isChecked={props.setor === 'Biblioteca'}
            onClick={() => props.setSetor('Biblioteca')}
          />
          <Text style={styles.radioLabel}>Biblioteca</Text>
        </View>
      </View>

      {/* Campo de Caso como Checkboxes */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Caso</Text>
        {opcoesCaso.map((opcao, index) => (
          <View key={index} style={styles.checkboxOption}>
            <CheckBox
              isChecked={selectedCaso.includes(opcao)}
              onClick={() => handleCasoChange(opcao)}
            />
            <Text style={styles.checkboxLabel}>{opcao}</Text>
          </View>
        ))}

        {/* Input para caso específico */}
        {showCasoEspecifico && (
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Caso Específico</Text>
            <TextInput
              style={styles.input}
              placeholder="Descreva o problema"
              autoCapitalize="sentences"
              autoCorrect={true}
              value={props.casoEspecifico}
              onChangeText={props.setCasoEspecifico}
            />
          </View>
        )}
      </View>

      {/* Tabela de Prioridade e Urgência */}
      <View style={styles.tableContainer}>
        <View style={styles.tableRow}>
          <Text style={[styles.tableHeader, styles.tableHeaderEmpty]}></Text>
          <Text style={[styles.tableHeader, styles.tableHeaderSmall]}>Urgente</Text>
          <Text style={[styles.tableHeader, styles.tableHeaderSmall]}>Moderado</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={[styles.tableHeader, styles.tableHeaderSmall]}>Nível de Prioridade</Text>
          <View style={styles.tableCell}>
            <CheckBox
              isChecked={props.prioridade === 'Urgente'}
              onClick={() => props.setPrioridade('Urgente')}
            />
          </View>
          <View style={styles.tableCell}>
            <CheckBox
              isChecked={props.prioridade === 'Moderado'}
              onClick={() => props.setPrioridade('Moderado')}
            />
          </View>
        </View>
        <View style={styles.tableRow}>
          <Text style={[styles.tableHeader, styles.tableHeaderSmall]}>Nível de Urgência</Text>
          <View style={styles.tableCell}>
            <CheckBox
              isChecked={props.urgencia === 'Urgente'}
              onClick={() => props.setUrgencia('Urgente')}
            />
          </View>
          <View style={styles.tableCell}>
            <CheckBox
              isChecked={props.urgencia === 'Moderado'}
              onClick={() => props.setUrgencia('Moderado')}
            />
          </View>
        </View>
      </View>

      {/* Campo de Ocorrência */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Ocorrência</Text>
        <TextInput
          style={[styles.input, styles.inputObs]} // Ajustando o estilo para inputLarge
          placeholder="Ocorrência"
          autoCapitalize="words"
          autoCorrect={false}
          value={props.ocorrencia}
          textAlignVertical="top"
          onChangeText={props.setOcorrencia}
        />
      </View>

      {/* Checkbox de Concordo com os termos e condições */}
      <View style={styles.termsContainer}>
        <CheckBox
          isChecked={props.isCheck}
          onClick={() => props.setIsCheck(!props.isCheck)}
        />
        <Text style={styles.termsText}>
          Concordo com os termos e condições
        </Text>
      </View>
    </View>
  );
}
