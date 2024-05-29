import{Text,View,Image, TouchableOpacity} from 'react-native'
import estilo from './style'
import { useNavigation } from '@react-navigation/native'
export default function Card({porcentagem,titulo,imagem,descricao}){
    const navigation = useNavigation();
    return(
        <TouchableOpacity 
        style={estilo.cardTarefa}
        onPress={() => navigation.navigate('Details', {porcentagem, titulo, imagem, descricao})}
        >
            <Image style={estilo.imagemCard} source={{ uri: imagem }} />
            <View style={{  marginLeft: 15,width:150 }}>
                 <Text style={estilo.tituloCard}>{titulo}</Text>
                <Text style={estilo.textoCard}>{descricao}</Text>
            </View>
            <Text style={{ fontSize: 25 }}>{porcentagem}</Text>
        </TouchableOpacity>
    )
}