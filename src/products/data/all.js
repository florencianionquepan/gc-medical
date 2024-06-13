import { heridas } from "./heridas";
import { nefrologia } from "./nefrologia";
import { urologia } from "./urologia";

const addLine = (products, nameLine) => {
    return products.map(pro => ({...pro,line: nameLine}));
}

const heridasAll= addLine( heridas, 'heridas');
const nefrologiaAll= addLine( nefrologia, 'nefrologia');
const urologiaAll= addLine( urologia, 'urologia');

const all = [
    ...heridasAll,
    ...nefrologiaAll,
    ...urologiaAll
];

export default all;