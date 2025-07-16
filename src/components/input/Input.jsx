import { styles } from './Input.style'
import { Text, TextInput, View } from "react-native"

const Input = ({ label, placeholder, isPassword, value, onChangeText }) => {
    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                secureTextEntry={isPassword}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    )
}

export default Input
