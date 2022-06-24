# Where2Work

## Installation du back

# RESTful API Node Express Mongoose

The project builds RESTful APIs using Node.js, Express and Mongoose, ...

## Manual Installation

Clone the repo:

```bash
git clone https://github.com/Work2Gezer/Where2Work
cd api
```

Install the dependencies:

```bash
npm install --save
```

Set the environment variables:

```bash
cp .env.sample .env
# open .env and modify the environment variables
```

Generate JWT RS256 key:

```bash
ssh-keygen -t rsa -P "" -b 2048 -m PEM -f storage/jwtRS256.key
ssh-keygen -e -m PEM -f storage/jwtRS256.key > storage/jwtRS256.key.pub
# encode base64
cat storage/jwtRS256.key | base64 # edit 
cat storage/jwtRS256.key.pub | base64 # edit 
```

## Commands

Running in development:

```bash
node scripts/initDatabase.js 
npm run start
```

Running in production:

```bash
# build
npm run build
# start
npm run prod
```


## License

[MIT](LICENSE)


## Installation du client avec expo

Installation des dépendances :

```bash
npm i
```
Solution privisoire : Il faut mettre son adresse IP à la ligen 43 dans le path dans le fichier Dashboard, ainsi qu' à la ligne 26
dans la loginPage, dans une prochaine version le back sera mis en ligne !
Il faut aussi renseigner son API_KEY_GOOGLE à la ligne 7 du fichier CreateMarkerPage afin de pouvoir rajouter des marqueurs.

Run client :

```bash
npm start
```
## Deploiement

Ce projet utilise Metro et Expo, et peut être déployé sur ios, android ou sur le web.

lancer Metro Building,
l'executer en localhost
cliquer "Run on Android device/emulator" ou scanner le QR Code pour avoir l'app sur son téléphone.
