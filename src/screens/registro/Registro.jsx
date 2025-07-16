import { styles } from './Registro.style';
// components
import { View } from 'react-native';
import Header from '../../components/header/Header';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import React from 'react';

const Registro = ({ navigation }) => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordTwo, setPasswordTwo] = React.useState('');

    return (
        <View style={styles.container}>
            <Header title='Crie sua conta.' />
            <View>
                <Input label='Nome Completo' placeholder='Informe seu nome completo'
                    value={name} onChangeText={(value) => setName(value)}
                />
                <Input label='Email' placeholder='Informe seu email'
                    value={email} onChangeText={(value) => setEmail(value)}
                />
                <Input label='Senha' placeholder='Informe sua senha' isPassword={true}
                    value={password} onChangeText={(value) => setPassword(value)}
                />
                <Input label='Confirmar Senha' placeholder='Confirme sua senha' isPassword={true}
                    value={passwordTwo} onChangeText={(value) => setPasswordTwo(value)}
                />
                <Button text='Próximo Passo' onPress={() => navigation.navigate('registrotwo')} />
            </View>
        </View>
    )
}

export default Registro

