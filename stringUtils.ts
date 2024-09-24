export const reverseString = (str:string):string => {
    return str.split('').reverse().join('');
};

//Modify your countCharacters function so it ignores spaces when counting characters. 
export const countCharacters = (str:string):number => {
    const remCharacters = str.replace(/\s/g, "");
    return remCharacters.length;
};

export const charString = (str:string):string => {
    return str.charAt(5);
};
