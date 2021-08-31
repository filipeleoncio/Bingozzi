import { makeStyles } from '@material-ui/core';
import { CARTELA } from '../../constants/Cartela';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 70,
    },
    cartelaGrid: {
        width: CARTELA.SIZE,
        height: CARTELA.SIZE,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
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
}));
