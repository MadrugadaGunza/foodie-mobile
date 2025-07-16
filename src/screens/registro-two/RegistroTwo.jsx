import { styles } from './RegistroTwo.style';
// components
import { View } from 'react-native';
import Header from '../../components/header/Header';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import React from 'react';

const RegistroTwo = () => {
    const [endereco, setEndereco] = React.useState('');
    const [complemento, setComplemento] = React.useState('');
    const [bairro, setBairro] = React.useState('');
    const [cidade, setCidade] = React.useState('');
    const [uf, setUf] = React.useState('');
    const [cep, setCep] = React.useState('');

    return (
        <View style={styles.container}>
            <Header title='Informe seu endereço.' />
            <View>
                <View style={{ flexDirection: 'row', gap: 8 }}>
                    <View style={{ width: '70%' }}>
                        <Input label='Endereço' placeholder='Informe seu endereço'
                            value={endereco} onChangeText={(value) => setEndereco(value)}
                        />
                    </View>
                    <View style={{ width: '27%' }}>
                        <Input label='Compl.' value={complemento} onChangeText={(value) => setComplemento(value)} />
                    </View>
                </View>
                <Input label='Bairro' placeholder='Informe seu bairro'
                    value={bairro} onChangeText={(value) => setBairro(value)}
                />
                <View style={{ flexDirection: 'row', gap: 8 }}>
                    <View style={{ width: '70%' }}>
                        <Input label='Cidade' placeholder='Informe sua cidade'
                            value={cidade} onChangeText={(value) => setCidade(value)}
                        />
                    </View>
                    <View style={{ width: '27%' }}>
                        <Input label='UF' value={uf} onChangeText={(value) => setUf(value)} />
                    </View>
                </View>
                <Input label='CEP' placeholder='Informe seu CEP' value={cep} onChangeText={(value) => setCep(value)} />
                <Button text='Registar' />
            </View>
        </View>
    )
}

export default RegistroTwo

