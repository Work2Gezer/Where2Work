//toutes les erreurs que l'on peut rencontrer dans l'application


const error_fr = {
    mail : "Le mail est incorrect",
    password : "Le mot de passe est incorrect",
    user : "L'utilisateur n'existe pas",
    login : "Mail ou mot de passe incorrect",
    checkCharPass:"Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial."
}

const error_en = {
    mail : "Email is not valid!",
    password : "Password is not valid!",
    user : "User doesn't exist!",
    login : "Email or password is not valid!",
    checkCharPass:"The password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character."
}


exports.error_fr = error_fr;
exports.error_en = error_en;