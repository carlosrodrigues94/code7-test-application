const currency = (amount: string | number): string => `R$ ${amount
  .toString()
  .replace(/\D/g, '') // permite digitar apenas números
  .replace(/[0-9]{12}/, 'inválido') // limita pra máximo 999.999.999,99
  .replace(/(\d{1})(\d{8})$/, '$1.$2') // coloca ponto antes dos últimos 8 digitos
  .replace(/(\d{1})(\d{5})$/, '$1.$2') // coloca ponto antes dos últimos 5 digitos
  .replace(/(\d{1})(\d{1,2})$/, '$1,$2')}`;

const dateFormat = (data: Date): string => {
  const dateFormated = new Intl.DateTimeFormat(['ban', 'id']).format(data);

  return dateFormated;
};
export { currency, dateFormat };
