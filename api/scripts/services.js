//Couche services avec methodes global utilisables dans l'application


//Fonction de formatage date pour affichage dans l'application (format dd/mm/yyyy)
function formatDate(date) {
    const d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [day, month, year].join('/');
}

//Fonction qui enleve les accents d'une chaine de caracteres
function removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

//Fonction qui enleve les espaces d'une chaine de caracteres
function removeSpaces(str) {
    return str.replace(/\s/g, '');
}

export default {
    formatDate,
    removeAccents,
    removeSpaces
}

