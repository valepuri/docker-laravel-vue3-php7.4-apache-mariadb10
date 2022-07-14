## Applicazione base per utilizzare laravel con docker, php7.4, apache, mariadb10, vue3

Semplice installazione corredate di rotte web e api di base, 3 componenti vue


### Istruzioni

- **scaricare laravel**
- **copiare questa cartella e il file docker-compose.yml**
- **configurare il docker-compose.yml secondo necessità**
- **lanciare docker-compose up per installare tutto**
- **lanciare docker-compose down per bloccare l'esecuzione del container**

- **configurare mysql workbench con:**
 - 127.0.0.1 porta esposta dal container 33061
 - user & password come indicati nel file .env

- **per eseguire qualsiasi comando sul container dalla macchina locale:**
docker exec [id_del_container] [comando]
**ESEMPIO:**
docker exec 12b12a6779981f8a104e0c082a20f8591d259a98d50f52e62a9256c1e694c438 php artisan migrate

- **anche per installare package o altro è consigliabile farlo sul container (per questioni di versioni php, etc...) in questo modo sarà il container che allinea la macchina locale.**

- **infine, sulla macchina locale lanciare i comandi: (per installare npm e vue)**
 - npm install
 - npm install vue 

- **andare sul browser: http://localhost:8080**

## ECCEZIONI:

Se si dovesse ricevere l'errore: *Warning: require(/var/www/html/public/../vendor/autoload.php): failed to open stream: No such file or directory in /var/www/html/public/index.php on line 34* 
Entrare nel terminale del container e lanciare il comando **composer install**, poichè vuol dire che per qualche motivo lo script nel Dockerfile non è stato eseguito




