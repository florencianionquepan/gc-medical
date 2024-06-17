import { heridas } from "./1_heridas";
import { oncologia } from "./2_oncologia";
import { urologia } from "./3_urologia";
import { diabetes } from "./4_diabetes";
import { neurologia } from './../data/5_neurologia';
import { cardiologia } from './../data/6_cardiologia';
import { gastroenterologia } from './../data/7_gastroenterologia';
import { cirugia } from './../data/8_cirugia';

const addLine = (products, nameLine) => {
    return products.map(pro => ({...pro,line: nameLine}));
}

const heridasAll= addLine( heridas, 'heridas');
const oncologiaAll= addLine( oncologia, 'oncologia');
const urologiaAll= addLine( urologia, 'urologia');
const diabetesAll= addLine(diabetes, 'diabetes');
const neurologiaAll = addLine(neurologia, 'neurologia');
const cardiologiaAll = addLine(cardiologia, 'cardiologia');
const gastroenterologiaAll = addLine(gastroenterologia, 'gastroenterologia');
const cirugiaAll = addLine(cirugia, 'cirugia');

const all = [
    ...heridasAll,
    ...oncologiaAll,
    ...urologiaAll,
    ...diabetesAll,
    ...neurologiaAll,
    ...cardiologiaAll,
    ...gastroenterologiaAll,
    ...cirugiaAll,
];

export default all;