import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomWidth: 1,
        paddingTop: 16,
        paddingBottom: 16,
        borderColor: COLORS.light_grey,
    },
    content: {
        flexDirection: 'row',
    },
    image: {
        width: 50,
        height: 50,
    },
    descricao: {
        marginLeft: 6,
        marginRight: 4,
    },
    title: {
        fontSize: 22,
        fontWeight: 500,
        color: COLORS.dark_grey
    },
    paragrafo: {
        fontSize: 14,
        color: COLORS.medium_grey
    },
    img: {
        width: 30,
        height: 30,
    },
})