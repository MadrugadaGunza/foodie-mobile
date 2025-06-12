import { styles } from './RegistroTwo.style';
// components
import { View } from 'react-native';
import Header from '../../components/header/Header';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

const RegistroTwo = () => {
    return (
        <View style={styles.container}>
            <Header title='Informe seu endereço.' />
            <View>
                <View style={{ flexDirection: 'row', gap: 8 }}>
                    <View style={{ width: '70%' }}>
                        <Input label='Endereço' placeholder='Informe seu endereço' />
                    </View>
                    <View style={{ width: '27%' }}>
                        <Input label='Compl.' />
                    </View>
                </View>
                <Input label='Bairro' placeholder='Informe seu bairro' />
                <View style={{ flexDirection: 'row', gap: 8 }}>
                    <View style={{ width: '70%' }}>
                        <Input label='Cidade' placeholder='Informe sua cidade' />
                    </View>
                    <View style={{ width: '27%' }}>
                        <Input label='UF' />
                    </View>
                </View>
                <Input label='CEP' placeholder='Informe seu CEP' />
                <Button text='Próximo Passo' />
            </View>
        </View>
    )
}

export default RegistroTwo

