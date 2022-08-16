import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },


    button: {
        backgroundColor: 'black',
        width: '70%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
    },
    buttonOutline: {
        marginTop: 5,
        borderColor: 'black',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '900',
        fontSize: 16,
    },

    buttonOutlineText: {
        color: 'black',
        fontWeight: '700',
        fontSize: 16,

    },

    listItem: {
        backgroundColor: 'white',
        marginTop: 10,
        padding: 20,
        borderColor: 'black',
        borderWidth: 2,
        marginBottom: 10,
        borderRadius: 10,
    },

    discountBox: {
        backgroundColor: 'white',
        width: '80%',
        marginTop: 10,
        padding: 20,
        borderColor: 'black',
        borderWidth: 2,
        marginBottom: 10,
        alignItems: 'center',
    },

    totalBox: {
        backgroundColor: 'black',
        marginTop: 10,
        padding: 20,
        borderColor: 'black',
        borderWidth: 2,
        marginBottom: 10,
        borderRadius: 10,
        width: '70%',
        alignItems: 'center',
    },

    blackText: {
        color: 'black',
        fontWeight: '900',
        fontSize: 16,
        marginBottom: 10,
    },

    rmvBtn: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: 'black',
        borderRadius: 10,
        marginLeft: 7,
        marginTop: 10,
    }
});