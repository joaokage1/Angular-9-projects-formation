import { Injectable } from '@angular/core';

import { Moeda } from '../models';

@Injectable()
export class MoedaService {

  private moedas: Moeda[];

  constructor() {}

  private moedasObj = [ //http://fixer.io
	{ "sigla": "ARS", "descricao": "Peso Argentino" },
	{ "sigla": "AUD", "descricao": "Dólar australiano" },
	{ "sigla": "BTC", "descricao": "Bit Coin" },
	{ "sigla": "CAD", "descricao": "Dólar Canadense" },
	{ "sigla": "CHF", "descricao": "Franco Suíço" },
	{ "sigla": "CNY", "descricao": "Yuan Chinês" },
	{ "sigla": "ETH", "descricao": "Ethereum" },
	{ "sigla": "EUR", "descricao": "Euro" },
	{ "sigla": "GBP", "descricao": "Libra Esterlina" },
	{ "sigla": "ILS", "descricao": "Novo Shekel Israelense" },
	{ "sigla": "JPY", "descricao": "Iene Japonês" },
	{ "sigla": "LTC", "descricao": "Litecoin" },
	{ "sigla": "USD", "descricao": "Dólar Comercial" },
	{ "sigla": "USDT", "descricao": "Dólar Turismo" },
	{ "sigla": "XRP", "descricao": "Ripple" },
	{ "sigla": "BRL", "descricao": "Real" }
  ];

  listarTodas(): Moeda[] {
  	if (this.moedas) {
  		return this.moedas;
  	} 
  	
  	this.moedas = [];

  	for (let moedaObj of this.moedasObj) {
  		let moeda: Moeda = new Moeda();
  		Object.assign(moeda, moedaObj);
  		this.moedas.push(moeda);
  	}

  	return this.moedas;
  }

}
