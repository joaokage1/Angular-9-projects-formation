import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  /**
   * Objeto Lista de Tarefas
   */
  tarefas: Tarefa[];

  /**
   * Construtor
   * 
   * @param tarefaService 
   */
  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  /**
   * @returns Tarefas
   */
  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  /**
   * Remover a tarefa com um evento para confirmação
   * 
   * @param $event 
   * @param tarefa 
   */
  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"?')){
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.tarefaService.listarTodos();
    }
  }

}
