import { heridas } from "./heridas";
import { nefrologia } from "./nefrologia";
import { urologia } from "./nefrologia";

const addLine = (products, nameLine) => {
    return products.map(pro => ({...products,line: nameLine}));
}

const heridasAll= addLine( heridas, 'heridas');
const nefrologiaAll= addLine( nefrologia, 'nefrologia');
const urologiaAll= addLine( urologia, 'heridas');

const all = [
    ...heridasAll,
    ...nefrologiaAll,
    urologiaAll
];

export default all;