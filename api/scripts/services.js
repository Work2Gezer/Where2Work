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

//Fonction qui check si un mail est corret
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

//Fonction qui check si un mot de passe est correct
function isPassword(password) {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; //Majuscule, minuscule, chiffre et caractere special
    return regex.test(password);
}


exports.formatDate = formatDate;
exports.removeAccents = removeAccents;
exports.removeSpaces = removeSpaces;
exports.isEmail = isEmail;
exports.isPassword = isPassword;

