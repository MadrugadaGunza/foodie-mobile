import { COLORS, FONT_SIZE } from "../../constatns/theme";

export const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: '20%'
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        marginBottom: 30,
    },
    footerText: {
        textAlign: 'center',
        color: COLORS.dark_grey,
        fontSize: FONT_SIZE.md
    }
}