import { Text, TouchableOpacity } from 'react-native'
import { styles } from './Button.style'

const Button = ({ text, onPress }) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button
