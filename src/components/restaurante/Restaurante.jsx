import { styles } from './Restaurante.style'
import { Image, Text, TouchableOpacity, View } from 'react-native';

const Restaurante = ({ data, navigation, icon }) => {
    return (
        <View style={styles.restaurante}>
            <Image source={data.logotipo} style={styles.logo} />
            <View style={styles.textos}>
                <Text style={styles.nome}>{data.nome}</Text>
                <Text style={styles.endereco}>{data.endereco}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('favorito')}>
                <Image source={icon} style={styles.icone} />
            </TouchableOpacity>
        </View>
    )
}

export default Restaurante
