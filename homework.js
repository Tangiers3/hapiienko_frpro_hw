let birthYear = prompt('Введіть рік народження:');
let city = prompt('В якому місті ви живете?');
let favoriteSport = prompt('Який ваш улюблений вид спорту?');

if (birthYear === null || city === null || favoriteSport === null) {
    alert('Дуже шкода, що ви не захотіли ввести свої дані :(');
} else {
    let age = new Date().getFullYear() - birthYear;

    let message = 'Ваш вік: ' + age + '\n';

    if (city === 'Київ' || city === 'Вашингтон' || city === 'Лондон') {
        let country = {
            'Київ': 'України',
            'Вашингтон': 'США',
            'Лондон': 'Великої Британії'
        };
        message += 'Ти живеш у столиці ' + country[city] + '.';
    } else {
        message += 'Ти живеш у місті ' + city + '.';
    }

    let sportsChampions = {
        'футбол': 'Андрій Шевченко',
        'баскетбол': 'Леброн Джеймс',
        'теніс': 'Еліна Світоліна'
    };

    if (favoriteSport in sportsChampions) {
        message += '\nКруто! Хочеш стати як ' + sportsChampions[favoriteSport] + '?';
    } else {
        message += '\nКруто! Мені також подобається ' + [favoriteSport] +  '.';
    }

    alert(message);
}