import { COLORS, FONT_SIZE } from "../../constatns/theme";

export const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 16
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        marginBottom: 30,
    },
    footerText:{
        textAlign: 'center',
        color: COLORS.dark_grey,
        fontSize: FONT_SIZE.md
    }
}