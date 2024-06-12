import React from 'react';
import { Dimensions, Text, StyleSheet, View, Image, FlatList } from 'react-native';
import Navbar from '../../components/Navbar';
import Carousel from '../../components/Carousel';
import pecas from '../../data/pecas';
import notebooks from '../../data/notebooks';
import perifericos from '../../data/perifericos';
import Card from '../../components/Card';
const width = Dimensions.get('window').width;

export default function Home() {
  return (
    <View style={estilo.body}>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <View style={estilo.mainContent}>
        <View style={estilo.conteudoPecas}>
          <Text style={estilo.titulo}>As peças mais baratas do mercado!</Text>
          <FlatList style={estilo.cardContentLine}
            data={pecas}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Card
                imgUrl={item.imgUrl}
                nome={item.nome}
                precoNormal={item.precoNormal}
                precoPromocao={item.precoPromocao}
                metodoPagamento={item.metodoPagamento}
              />
            )}
          />
        </View>
        <Text style={estilo.titulo}>Periféricos mais baratos do mercado!</Text>
        <FlatList style={estilo.cardContentLine}
          data={perifericos}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              imgUrl={item.imgUrl}
              nome={item.nome}
              precoNormal={item.precoNormal}
              precoPromocao={item.precoPromocao}
              metodoPagamento={item.metodoPagamento}
            />
          )}
        />
        <Text style={estilo.titulo}>Os melhores notebook gamers!</Text>
        <FlatList style={estilo.cardContentLine}
          data={notebooks}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              imgUrl={item.imgUrl}
              nome={item.nome}
              precoNormal={item.precoNormal}
              precoPromocao={item.precoPromocao}
              metodoPagamento={item.metodoPagamento}
            />
          )}
        />
      </View>
    </View>
  );
}
const estilo = StyleSheet.create({
  body: {
    backgroundColor: '#F5F5F5',
    width: '100%',
    height: '2300px',
  },
  titulo: {
    textAlign: 'center',
    fontSize: '2em',
    color: '#DB020A',
  },
  mainContent: {
    padding: '5px'
  },

  cardContentLine: {
    paddingTop: '15px',
    paddingBottom: '15px',
    paddingLeft: '12px',
    paddingRight: '12px',
  }
});
