import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from './Perfil.style'
import icons from '../../constants/icons'

const Perfil = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.content}>
                    <Image source={icons.endereco} style={styles.image} />
                    <View style={styles.descricao}>
                        <Text style={styles.title}>Endereco</Text>
                        <Text style={styles.paragrafo}>Meu endereço de entrega</Text>
                    </View>
                </View>
                <Image source={icons.expandir} style={styles.img} />
            </View>
            <View style={styles.card}>
                <View style={styles.content}>
                    <Image source={icons.meusDados} style={styles.image} />
                    <View style={styles.descricao}>
                        <Text style={styles.title}>Meus Dados</Text>
                        <Text style={styles.paragrafo}>Informações da minha conta</Text>
                    </View>
                </View>
                <Image source={icons.expandir} style={styles.img} />
            </View>
            <View style={styles.card}>
                <View style={styles.content}>
                    <Image source={icons.logout} style={styles.image} />
                    <View style={styles.descricao}>
                        <Text style={styles.title}>Desconectar</Text>
                        <Text style={styles.paragrafo}>Desconectar seu usúario deste aparelho</Text>
                    </View>
                </View>
                <Image source={icons.expandir} style={styles.img} />
            </View>
        </View>
    )
}

export default Perfil
