// styles
import { styles } from './Home.style';
// dependencies
import React from 'react';
// components
import { Image, ScrollView, Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../../components/input/Input';
import Categorias from '../../components/categorias/Categorias';
import Banners from '../../components/banners/Banners';
// icones and data
import icons from '../../constants/icons.js';
import { categorias, banners, restaurantes } from '../../constants/dados';
import Restaurante from '../../components/restaurante/Restaurante';

const Home = ({ navigation }) => {
    const [busca, setBusca] = React.useState('');

    return (
        <SafeAreaView style={styles.constainer}>
            <View style={styles.headerBar}>
                <Image source={icons.logo} style={styles.logo} />
                <Image source={icons.cart} style={styles.cart} />
            </View>
            <Input placeholder='O que vamos pedir hoje?' value={busca} onChangeText={(value) => setBusca(value)} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categorias data={categorias} />
                <Banners data={banners} />

                <Text style={styles.title}>Destaques</Text>
                <FlatList 
                    data={restaurantes}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <Restaurante key={item.id} data={item} icon={icons.favoritoFull} navigation={navigation} />}
                    showsVerticalScrollIndicator={false}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home
