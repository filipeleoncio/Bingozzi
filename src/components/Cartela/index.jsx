import { Button } from '@material-ui/core';
import clsx from 'clsx';
import React, { useState } from 'react';
import images from '../../assets/images';
import { CARTELA } from '../../constants/Cartela';
import { useStyles } from './styles';

function makeCartela() {
    const tamanho = CARTELA.CEL_QTD;
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

function fillArrayCartela(arrayNumeros) {
    const numeros = [];
    arrayNumeros.forEach((numero, index, arr) => {
        if (index === arr.length / 2) numeros.push({ numero: -1 });
        numeros.push({ numero, checked: false });
    });
    return numeros;
}

function fillSorteados() {
    const max = 90;
    const sorteados = [];
    for (let i = 1; i <= max; i++) {
        sorteados.push({ numero: i, checked: false });
    }
    return sorteados;
}

export function Cartela({ arrayNumeros = makeCartela() }) {
    const classes = useStyles();
    const [arrayCartela, setArrayCartela] = useState(
        fillArrayCartela(arrayNumeros),
    );
    const [numerosSorteados, setNumerosSorteado] = useState(fillSorteados);

    function onClickCel(index) {
        let newArrayCartela = [...arrayCartela];
        const newCel = {
            numero: arrayCartela[index].numero,
            checked: !arrayCartela[index].checked,
        };
        newArrayCartela[index] = newCel;
        setArrayCartela(newArrayCartela);
    }

    function onClickSorteadoCel(index) {
        let newArrayCartela = [...arrayCartela];
        const newCel = {
            numero: arrayCartela[index].numero,
            checked: !arrayCartela[index].checked,
        };
        newArrayCartela[index] = newCel;
        setArrayCartela(newArrayCartela);
    }

    function clearCartelaCheck() {
        const newArrayCartela = arrayCartela.map((cel) => ({
            numero: cel.numero,
        }));
        setArrayCartela(newArrayCartela);
    }

    return (
        <div className={classes.root}>
            <div className={classes.cartelaGrid}>
                {arrayCartela.map((cel, index) => {
                    const clicable = cel.numero !== -1;
                    return (
                        <div
                            key={cel.numero}
                            onClick={() => {
                                if (clicable) onClickCel(index);
                            }}
                            className={clsx(classes.cartelaCel, {
                                [classes.clicableCel]: clicable,
                                [classes.checkedCel]: cel.checked,
                            })}
                        >
                            {getCelContent(cel.numero)}
                        </div>
                    );
                })}
            </div>
            <div className={classes.cartelaButtons}>
                <Button
                    className={classes.limparCartelaButton}
                    onClick={clearCartelaCheck}
                >
                    Limpar Marcações
                </Button>
            </div>
            <div className={classes.tabelaSorteados}>
                {numerosSorteados.map((num, index) => (
                    <div
                        key={num.numero}
                        onClick={() => onClickSorteadoCel(index)}
                        className={clsx(classes.sorteadoCel, {
                            [classes.sorteadoChecked]: num.checked,
                        })}
                    >
                        {num.numero}
                    </div>
                ))}
            </div>
        </div>
    );
}
