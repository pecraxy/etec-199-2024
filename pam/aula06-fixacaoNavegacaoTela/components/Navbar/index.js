import {View, Text, Image} from 'react-native'
import estilo from './style';

export default function Navbar(){
    return(
        <View style = {estilo.navbar}>
           <Image source={require('../../assets/menu-icon.png')} style={estilo.menu}/> 
           <Image source={require('../../assets/chapiu-logo.png')} style={estilo.logo}/>
           <Image source={require('../../assets/search-icon.png')} style={estilo.search}/>
        </View>
    )
}