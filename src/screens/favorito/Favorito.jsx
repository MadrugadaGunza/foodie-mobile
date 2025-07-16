import { styles } from './Favorito.style'
import { FlatList, Text, View } from 'react-native'
import Restaurante from '../../components/restaurante/Restaurante'
import { restaurantes } from '../../constants/dados'
import icons from '../../constants/icons'

const Favorito = ({ navigation }) => {
    return (
        <View style={styles.constainer}>
            <FlatList
                data={restaurantes}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <Restaurante data={item} navigation={navigation} icon={icons.remove} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}
                ListEmptyComponent={() => (
                    <View style={styles.empty}>
                        <Text style={styles.textempty}>Lista Vazia</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default Favorito
