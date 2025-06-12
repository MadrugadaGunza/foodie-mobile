import { styles } from './Login.style';
import React from 'react';
// components
import { Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/header/Header';
import Input from '../../components/input/Input';
import Button from './../../components/button/Button';

const Login = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');

    const handlePress = () => {
        console.log({ email, senha });
    }

    return (
        <View style={styles.container}>
            <Header title='Acesse sua conta.' />
            <View>
                <Input label='Email' placeholder='Informe seu email'
                    value={email} onChangeText={(value) => setEmail(value)}
                />
                <Input label='Senha' placeholder='Informe sua senha' isPassword={true}
                    value={senha} onChangeText={(value) => setSenha(value)}
                />
                <Button text='Login' onPress={handlePress} />
            </View>
            <TouchableOpacity style={styles.footer} onPress={() => navigation.navigate('registro')}>
                <Text style={styles.footerText}>Criar minha conta.</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login
