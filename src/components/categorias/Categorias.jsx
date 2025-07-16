import { styles } from './Categorias.style'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

const Categorias = ({ data }) => {
    return (
        <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {data.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.categoria}>
                        <Image source={item.icone} style={styles.icone} />
                        <Text style={styles.descricao}>{item.descricao}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

export default Categorias
