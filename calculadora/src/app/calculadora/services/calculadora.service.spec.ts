import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 5 = 6', () => {
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(1,5, CalculadoraService.SOMA);
      expect(soma).toEqual(6);
    })
  });

  it('deve garantir que 1 - 5 = -4', () => {
    inject([CalculadoraService], (service: CalculadoraService) => {
      let subtracao = service.calcular(1,5, CalculadoraService.SUBTRACAO);
      expect(subtracao).toEqual(-4);
    })
  });

  it('deve garantir que 10 / 5 = 2', () => {
    inject([CalculadoraService], (service: CalculadoraService) => {
      let divisao = service.calcular(10,5, CalculadoraService.DIVISAO);
      expect(divisao).toEqual(2);
    })
  });
});
