import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    item: {
        flexDirection: 'row',
        marginTop: 6,
        marginBottom: 4,
    },
    logo: {
        width: 80,
        height: 80,
        borderRadius: 4,
    },
    textos: {
        flex: 1,
        marginLeft: 8,
    },
    nome: {
        color: '#5d6275',
        marginBottom: 2,
        fontSize: 16,
    },
    status: {
        color: 'green',
        fontSize: 16,
    },
});