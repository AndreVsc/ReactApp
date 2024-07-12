import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import useGetData from '../components/useGetData';
import { styles } from './HomeStyles';
import { Button } from '../components/Button/Button';
import usePutStatus from '../components/usePutStatus';

const Home = () => {
  const { data: initialData, loadingGet, refetchData } = useGetData();
  const { loading: putLoading, error: putError, putStatus } = usePutStatus();
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState(initialData);
  const [disabledButtons, setDisabledButtons] = useState({});

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  const handleRefetchData = async () => {
    await refetchData();
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await handleRefetchData();
    setRefreshing(false);
  };

  const handleButton = async (_id, status) => {
    setDisabledButtons(prevState => ({ ...prevState, [_id]: true }));
    const newStatus = !status;
    // Atualizar o estado localmente para resposta imediata
    setData(prevData =>
      prevData.map(item =>
        item._id === _id ? { ...item, status: newStatus } : item
      )
    );
    await putStatus(_id, newStatus); 
    await handleRefetchData(); // Garantir consistência dos dados
    setDisabledButtons(prevState => ({ ...prevState, [_id]: false }));
  };

  return (
    <FlatList
      contentContainerStyle={{ flexGrow: 1 }}
      data={data}
      keyExtractor={(item) => item._id}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      ListEmptyComponent={
        loadingGet ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <Text>Nenhum dado disponível.</Text>
        )
      }
      renderItem={({ item }) => (
        <View style={[styles.container, item.status ? styles.concluido : styles.default]}>
          <Text><Text style={styles.textNormal}>{item.nome}</Text></Text>
          <Text><Text style={styles.textBold}>Setor</Text> <Text style={styles.textNormal}>{item.setor}</Text></Text>
          <Text><Text style={styles.textBold}>Prioridade</Text> <Text style={styles.textNormal}>{item.classe.prioridade}</Text></Text>
          <Text><Text style={styles.textBold}>Urgência</Text> <Text style={styles.textNormal}>{item.classe.urgencia}</Text></Text>
          <Text><Text style={styles.textBold}>Caso</Text> <Text style={styles.textNormal}>{item.caso}</Text></Text>
          {item.casoEspecifico?<Text><Text style={styles.textBold}>Caso Específico</Text> <Text style={styles.textNormal}>{item.casoEspecifico}</Text></Text>:<></>}
          <Text><Text style={styles.textBold}>Data</Text> <Text style={styles.textNormal}>{new Date(item.createdAt).toLocaleString()}</Text></Text>
          <Text style={styles.textBold}>Ocorrência</Text><Text style={styles.textNormal}>{item.ocorrencia}</Text>
          <Button 
            text={'Pronto'} 
            handleButton={() => handleButton(item._id, item.status)} 
            disabled={disabledButtons[item._id]} 
          />
        </View>
      )}
    />
  );
};

export default Home;
