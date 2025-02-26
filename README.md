# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Per poter far funzionare tutto, dobbiamo avviare il codice python che funziona sulla porta 8000 e grazie alle chiamate API faremo delle query sul database presente all'interno del file.
I componenti per far funzionare python sono flask, sqlite3 e flask CORS, utilizzato per bypassare la protezione CORS.
Il file react comunicherà con l'applicazione python sulla porta 5174, che farà apparire i dati sul nostro front-end.

COME È COMPOSTA IL FRONT END?

In alto troveremo varie voci, tra cui USERS, DISPOSITIVI E INDIRIZZI
Questi tre comunicano con il database e all'interno di esse troveremo i relativi dati.


PRE-REQUESITI:

Installare i pacchetti flask e flask-cors per poterli utilizzare su python.
i comandi sono pip install Flask e pip install Flask-CORS
ricorda che se sei in un ambiente linux, c'è la probabilità che i pacchetti siano gestiti con apt, di conseguenza dovrei usare apt install.
All'interno del file principale, troverai 2 cartelle, frontend e backend.
all'interno della cartella backend trovi il file in python e il file del database dove andrà a prendere i dati.
Per prima cosa ci spostiamo sulla cartella del nominata backend, apriamo un terminale e scriviamo il comando
python3 mysite.py
Troveremo il server flask che viene eseguito sulal porta 8000 del localhost
In seguito ci spostiamo sulla cartella frontend, apriamo un terminale e scriviamo il comando
npm run dev
Il comando avvierà il progetto sulla parte 5173 sul localhost.
Per poter raggiungerla apriamo il browser e visiteremo http://localhost:5174
