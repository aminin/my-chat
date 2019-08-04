import Chance from 'chance';

const chance = new Chance();

let username = prompt('Введите ваше имя', chance.first({ nationality: 'ru' }));

export default username;
