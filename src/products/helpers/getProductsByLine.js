import {heridas} from './../data/1_heridas';
import {oncologia} from './../data/2_oncologia';
import {urologia} from './../data/3_urologia';
import {diabetes} from './../data/4_diabetes';
import {neurologia} from './../data/5_neurologia';
import {cardiologia} from './../data/6_cardiologia';
import {gastroenterologia} from './../data/7_gastroenterologia';
import {cirugia} from './../data/8_cirugia';

const linesMap = {
    'heridas': heridas,
    'oncologia': oncologia,
    'urologia': urologia,
    'diabetes': diabetes,
    'neurologia': neurologia,
    'cardiologia': cardiologia,
    'gastroenterologia': gastroenterologia,
    'cirugia': cirugia,
  };

export const getProductsByLine = (name) => {
    return linesMap[name] || [];
}
