import React from 'react'
import { Image, ScrollView, TouchableOpacity, View } from 'react-native'
import { styles } from './Banner.style'

const Banners = ({ data }) => {
    return (
        <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {data.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.banner}>
                        <Image source={item.icone} style={styles.icone} />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

export default Banners
