import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { restaurantes } from '../../constants/dados'
import { styles } from './Pedidos.style'

const Pedidos = () => {
    return (
        <View style={styles.constainer}>
            <FlatList
                contentContainerStyle={{ padding: 16 }}
                showsVerticalScrollIndicator={false}
                data={restaurantes}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Image source={item.logotipo} style={styles.logo} />
                        <View style={styles.textos}>
                            <Text style={styles.nome}>{item.nome}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 }}>
                                <Text style={{ fontSize: 16 }}>$ 45</Text>
                                <Text style={{ fontSize: 16 }}>21/06/2025</Text>
                            </View>
                            <Text style={styles.status}>Entregue</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

export default Pedidos
