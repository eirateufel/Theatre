const costFormat = new Intl.NumberFormat('ru-RU', 
    {   style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2 });

module.exports = {
    costFormat,
};