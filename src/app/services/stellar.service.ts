import { Injectable } from '@angular/core';
import * as jsStellarSdk from 'js-stellar-sdk';
import { get } from 'request';
jsStellarSdk.Network.useTestNetwork();
const server = new jsStellarSdk.Server('https://horizon-testnet.stellar.org');

@Injectable({
  providedIn: 'root'
})
export class StellarService {

  constructor() { }

   createAccount() {
  const pair = jsStellarSdk.Keypair.random();
  pair.secret();
  console.log(pair.secret());
  pair.publicKey();

  get({
    url: 'https://friendbot.stellar.org',
    qs: { addr: pair.publicKey() },
    json: true
  }, function (error, response, body) {
    if (error || response.statusCode !== 200) {
      console.error('ERROR!', error || body);
    } else {
      console.log('SUCCESS! You have a new account :)\n', body);

    }
  });
  return pair;
}

    // ===========================

     checkBalance(pair) {
      // the JS SDK uses promises for most actions, such as retrieving an account
      server.loadAccount(pair.publicKey()).then(function (account) {
        console.log('Balances for account: ' + pair.publicKey());
        account.balances.forEach(function (balance) {
          console.log('Type:', balance.asset_type, ', Balance:', balance.balance);
        });
      });

    }


    // =======================

     issueAssets(pair) {
      // Keys for accounts to issue and receive the new asset
      const issuingKeys = jsStellarSdk.Keypair
        .fromSecret('SCKL62GED46Z6ZXN7IBPQX43KNSQOI62XD7DKNW4FDFYZQUPQZRTHFBV');
      const receivingKeys = pair;

      // var receivingKeys = StellarSdk.Keypair
      //   .fromSecret('SDNW4TVMRPTO7NPSBYHYA2ESHOWQLQLOVDN3AKW6Q65YOVT7DIC3KYPO');

      // Create an object to represent the new asset
      const Blog = new jsStellarSdk.Asset('Blog', issuingKeys.publicKey());

      // First, the receiving account must trust the asset
      server.loadAccount(receivingKeys.publicKey())
        .then(function (receiver) {
          const transaction = new jsStellarSdk.TransactionBuilder(receiver)
            // The `changeTrust` operation creates (or alters) a trustline
            // The `limit` parameter below is optional
            .addOperation(jsStellarSdk.Operation.changeTrust({
              asset: Blog,
              limit: '1000'
            }))
            .build();
          transaction.sign(receivingKeys);
          return server.submitTransaction(transaction);
        })

        // Second, the issuing account actually sends a payment using the asset
        .then(function () {
          return server.loadAccount(issuingKeys.publicKey());
        })
        .then(function (issuer) {
          const transaction = new jsStellarSdk.TransactionBuilder(issuer)
            .addOperation(jsStellarSdk.Operation.payment({
              destination: receivingKeys.publicKey(),
              asset: Blog,
              amount: '20'
            }))
            .build();
          transaction.sign(issuingKeys);
          return server.submitTransaction(transaction);
        })
        .catch(function (error) {
          console.error('Error!', error);
        });

    }
}
