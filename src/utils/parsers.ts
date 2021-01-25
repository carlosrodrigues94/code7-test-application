const money = (value:string):string => {
  const finalValue = value
    .split('.')
    .join('')
    .split(',')
    .join('.')
    .split('R$')
    .join('')
    .split('%')
    .join('');

  return finalValue;
};

export { money };
