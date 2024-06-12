import {Dimensions, StyleSheet}from 'react-native'

const {width} = Dimensions.get('window');
const height = Dimensions.get('window').height;

const estilo = StyleSheet.create({

    navbar:{
      backgroundColor: '#DB020A',
      display: 'flex',
      flexWrap: 'nowrap',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100vw',
      height: height * 0.13,
    },
    title: {
      color: 'white',
      fontSize: '2.5em',
      fontWeight: 650,
      textAlign: 'center'
    },
    menu: {
      width: '15vw',
      height: '60%',
      margin: '0.3em'
    },
    search: {
      width: '15vw',
      height: '60%',
      margin: '0.3em'
    },
    logo: {
      width: width * 0.5,
      height: '10vw',
    }


})

export default estilo;