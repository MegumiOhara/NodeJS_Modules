import { reverseString, countCharacters, charString } from "./stringUtils";
import fs from "fs";
import path from 'path';

const reversed = reverseString("You can gather and modify date in the database");
fs.writeFileSync('reversed.txt', reversed);

const filePath:string = path.join( __dirname, 'reversed.txt');
console.log(`Sentence saved at: ${filePath}`);


console.log( reverseString("You can gather and modify date in the database"));
console.log( countCharacters("You can gather and modify date in the database"));
console.log( charString("NodeJS"));
