import { styles } from './Header.style'
import { Image, Text, View } from 'react-native'
import icons from '../../constatns/icons'

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Image style={styles.logo} source={icons.logo} />
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Header
