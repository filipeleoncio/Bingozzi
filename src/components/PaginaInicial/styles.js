import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'black',
        color: 'white',
        width: '100vw',
        height: '100vh',
    },
    pagePreTitle: {
        fontSize: 45,
        display: 'flex',
        justifyContent: 'center',
    },
    pageTitle: {
        fontSize: 55,
        display: 'flex',
        justifyContent: 'center',
    },
}));
