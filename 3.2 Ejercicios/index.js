let date = new Date();
let finAnio = new Date(date.getFullYear(),11,31)
let fechaFinal = Math.round((finAnio.getTime() - date.getTime()) / (1000 * 3600 * 24));

document.querySelector('.card-body').innerHTML = `
Quedan <strong>${fechaFinal}</strong> días para que termine el año.
`;