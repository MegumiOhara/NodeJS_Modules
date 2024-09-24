export const reverseString = (str:string):string => {
    return str.split('').reverse().join('');
};

export const countCharacters = (str:string):number => {
    return str.length;
};

export const charString = (str:string):string => {
    return str.charAt(5);
};
