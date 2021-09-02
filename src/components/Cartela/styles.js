import { makeStyles } from '@material-ui/core';
import { CARTELA, SORTEADOS } from '../../constants/Cartela';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 70,
    },
    cartelaGrid: {
        width: CARTELA.SIZE,
        height: CARTELA.SIZE,
        display: 'flex',
        flexWrap: 'wrap',
        // justifyContent: 'center',
        alignSelf: 'center',
    },
    cartelaCel: {
        width: CARTELA.SIZE / CARTELA.CELS_PER_ROW - 2,
        height: CARTELA.SIZE / CARTELA.CELS_PER_COLUMN - 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 50,
        border: '1px solid white',
    },
    clicableCel: {
        '&:hover': {
            cursor: 'pointer',
        },
    },
    checkedCel: {
        backgroundColor: 'green',
    },
    cartelaButtons: {
        paddingTop: 25,
        paddingBottom: 25,
        display: 'flex',
        justifyContent: 'center',
    },
    limparCartelaButton: {
        jus: 'center',
        color: 'white',
        // backgroundColor: 'gray',
        width: 200,
        height: 50,
        '&:hover': {
            backgroundColor: 'gray',
        },
    },
    tabelaSorteados: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        height: SORTEADOS.HEIGHT,
        alignContent: 'center',
    },
    sorteadoCel: {
        height: SORTEADOS.HEIGHT / 5 - 2,
        width: SORTEADOS.HEIGHT / 5 - 2,
        border: '0.5px solid white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sorteadoChecked: {
        backgroundColor: 'gray',
    },
}));
