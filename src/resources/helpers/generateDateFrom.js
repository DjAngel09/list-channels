const date = new Date();

export const generateDateFrom = () => {

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const dateFor = `${year}${month > 9 ? month : '0' + month}${day > 9 ? day : '0' + day}000000`;
  const dateTo = `${year}${month > 9 ? month : '0' + month}${day > 9 ? day : '0' + day}235959`;

  return {dateFor, dateTo}
}