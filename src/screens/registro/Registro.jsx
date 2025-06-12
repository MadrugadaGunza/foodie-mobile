import { styles } from './Registro.style';
// components
import { View } from 'react-native';
import Header from '../../components/header/Header';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

const Registro = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header title='Crie sua conta.' />
            <View>
                <Input label='Nome Completo' placeholder='Informe seu nome completo' />
                <Input label='Email' placeholder='Informe seu email' />
                <Input label='Senha' placeholder='Informe sua senha' isPassword={true} />
                <Input label='Confirmar Senha' placeholder='Confirme sua senha' isPassword={true} />
                <Button text='Próximo Passo' onPress={() => navigation.navigate('registrotwo')} />
            </View>
        </View>
    )
}

export default Registro

