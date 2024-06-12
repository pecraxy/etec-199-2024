import React from 'react';
import { Dimensions, Text, StyleSheet, View, Image, FlatList } from 'react-native';
import Navbar from '../../components/Navbar';
import { useRoute } from '@react-navigation/native';
const width = Dimensions.get('window').width;

export default function Produto({ nome, imgUrl, precoNormal, precoPromocao, metodoPagamento }) {
    const route = useRoute();
    return (
        <View style={style.body}>
            <Navbar></Navbar>
            <View style={style.mainContent}>
                <Text style={style.titulo}>{route.params.nome}</Text>
                <View style={style.assessmentCardContent}>
                    <Image style={style.icon} source={require('../../assets/star-solid.png')} />
                    <Image style={style.icon} source={require('../../assets/star-solid.png')} />
                    <Image style={style.icon} source={require('../../assets/star-solid.png')} />
                    <Image style={style.icon} source={require('../../assets/star-half-solid.png')} />
                    <Image style={style.icon} source={require('../../assets/star-regular.png')} />
                    <Text style={style.assessmentText}>
                        ({route.params.avaliacao} Avaliações)
                    </Text>
                </View>
                <Image style={style.imagem} source={{ uri: route.params.imgUrl }}></Image>
                <Text style={style.precoNormal}>{route.params.precoNormal}</Text>
                <Text style={style.precoPromocao}>{route.params.precoPromocao}</Text>
                <Text style={style.metodoPagamento}>{route.params.metodoPagamento}</Text>
                <View style={style.botao}>
                    <Text style={style.textoBotao}>Comprar</Text>
                </View>
            </View>

        </View>
    );
}
const style = StyleSheet.create({
    body: {
        backgroundColor: '#F5F5F5',
        width: '100%',
    },
    mainContent: {
        padding: '5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    titulo:{
        fontSize: 'x-large',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    imagem: {
        width: '97vw',
        height: '50vh',
        borderRadius: '10px'
    },
    precoNormal: {
        fontSize: '1.5rem',
        fontWeight: '600',
        textDecorationLine: 'line-through',
        color: '#696969',
     },

     precoPromocao: {
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#1EAD2C',
     },
    assessmentCardContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: '3.5px',
     },
  
     assessmentText: {
        fontSize: '10.2px',
        fontWeight: '400',
        color: '#A5A5A5',
     },
     icon: {
        height: '1.5rem',
        width: '1.5rem',
     },
     metodoPagamento: {
        textAlign: 'left',
        margin: '5px'
     },
     botao: {
        width: '50vw',
        height: '10vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        borderRadius: '10px'
     },
     textoBotao: {
        fontSize: 'x-large',
        color: 'white',
        fontWeight: '700'
     }

});
