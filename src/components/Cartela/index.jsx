import React from 'react';
import images from '../../assets/images';
import { useStyles } from './styles';

function makeCartela() {
    const tamanho = 24;
    let array = [];
    for (let i = 0; i < tamanho; i++) {
        array.push(i + 1);
    }
    return array;
}

function getCelContent(numero) {
    if (numero === -1)
        return (
            <img
                style={{ width: 'inherit' }}
                src={images.prayge}
                alt="prayge"
            />
        );
    return numero;
}

export function Cartela({ arrayNumeros = makeCartela() }) {
    const classes = useStyles();
    const numeros = [];
    arrayNumeros.forEach((numero, index, arr) => {
        if (index === arr.length / 2) numeros.push(-1);
        numeros.push(numero);
    });

    return (
        <div className={classes.root}>
            <div className={classes.cartelaGrid}>
                {numeros.map((numero) => (
                    <div className={classes.cartelaCel}>
                        {getCelContent(numero)}
                    </div>
                ))}
            </div>
        </div>
    );
}
