import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, FlatList, Dimensions, SafeAreaView } from 'react-native';

const height = Dimensions.get('window').height;
const {width} = Dimensions.get('window');

const images = [
    {
        id: 1,
        url: 'https://media.pichau.com.br/media/aw_rbslider/slides/2024_31_a_14_junho_LovePrumo_700x400.webp'
    },
    {
        id: 2,
        url: 'https://www.bigmicro.com.br/site/wp-content/uploads/2014/07/Banners-manutencao2-975x345.jpg'
    },

];

export default function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <SafeAreaView style={estilo.carousel}>
            <FlatList
                data={images}
                style={{ height: '100%' }}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => String(item?.id)}
                onMomentumScrollEnd={(event) => {
                    setActiveIndex(parseInt(event.nativeEvent.contentOffset.x/width))
                }}
                scrollEventThrottle={16}
                renderItem={({ item }) => <OnBoardinItem item={item}></OnBoardinItem>}
            ></FlatList>
            {
                images.length > 1 ?
                    <View style={estilo.dotContainer}>
                        {
                            images.map((_, i) => (
                                <View
                                    style={[estilo.dot, { backgroundColor: i === activeIndex ? 'red' : 'grey' }]}>
                                </View>
                            ))
                        }
                    </View> : null
            }
        </SafeAreaView>
    );
};

const OnBoardinItem = ({item}) => {
    return (
        <Image source={{uri: item.url}} style={estilo.imagem}></Image>
    );
}

const estilo = StyleSheet.create({
    carousel: {
        height: height * 0.30,
        backgroundColor: 'white',
        width: '100vw'
    },
    imagem: {
        height: '230px',
        width: '100vw',
        backgroundColor: 'black'
    },
    dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 1,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 6,
        marginHorizontal: 1,
        marginTop: '-2em'
    }
});