# VVSA Frontend cvicenie 2


# Návody
- https://angular.io/guide/http
- https://angular.io/guide/architecture-services
- https://angular.io/guide/pipes

- https://rxjs.dev/guide/overview



# 1 Nastavenie proxy

### proxy.config.js
```js
module.exports = {
    "/api": {
        target: "http://localhost:5000/",
        changeOrigin: true,
        secure: false,
    }
}
```

### angular.json
```json
"serve": {
  "builder": "@angular-devkit/build-angular:dev-server",
  "configurations": {
	"production": {
	  "browserTarget": "frontend:build:production"
	},
	"development": {
	  "browserTarget": "frontend:build:development",
	  DOPLNIT > "proxyConfig": "proxy.config.js"
	}
  },
```


# 2 API volania

### GET localhost:5000/api/transactions
```json
{
  "data": [
    { "transactionId": 1, "fullName": "Andrej Palovic", "transactionType": 0, "accountNumber": "46164646416", "bankCode": "1100", "issueDate": "2019-05-02T00:00:00", "amount": 10 },
    { "transactionId": 2, "fullName": "Andrej Palovic", "transactionType": 0, "accountNumber": "46164646416", "bankCode": "1100", "issueDate": "2019-05-05T00:00:00", "amount": 2.45 },
    { "transactionId": 3, "fullName": "Andrej Palovic", "transactionType": 0, "accountNumber": "98798798798", "bankCode": "0200", "issueDate": "2019-04-22T00:00:00", "amount": 24.99 },
    { "transactionId": 4, "fullName": "Andrej Palovic", "transactionType": 0, "accountNumber": "46164646416", "bankCode": "1100", "issueDate": "2019-05-12T00:00:00", "amount": 264.55 },
    { "transactionId": 5, "fullName": "Andrej Palovic", "transactionType": 1, "bankCode": "1100", "issueDate": "2019-05-12T12:00:00", "amount": 100 }
  ]
}
```

### GET localhost:5000/api/transactions/1
```json
{
  "data": {
    "transactionId": 1,
    "fullName": "Andrej Palovic",
    "transactionType": 0,
    "accountNumber": "46164646416",
    "bankCode": "1100",
    "issueDate": "2019-05-02T00:00:00",
    "amount": 10
  }
}
```

# 3 Implementácia dátovej service

### app.module.ts
```
import { HttpClientModule } from '@angular/common/http';
```
Treba importovat HttpClientModule a doplnit ho aj do <b>imports</b> bloku



### transactions.service.ts
```
ng g service transactions
```

- nepouzivat <b>any</b> - treba si vytvorit typ(interface), ktory zodpoveda ocakavanej odpovedi na API volanie

- pri volani service metod, nezabudnut na .subscribe() - inak sa volanie nespusti.


# 4 Implementácia pipe na zobrazenie typu transakcie

### transactionType.pipe.ts
```
ng g pipe transactionType
```
- vygenerovany template upravit podla potreby (nahradit unknown za spravny typ)
- mapovanie transactionType:
    ```js
    case 0: return 'DEBIT transaction';
    case 1: return 'ATM withdrawal';
    default: return '';
    ```