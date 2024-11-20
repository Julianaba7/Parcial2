import { Component, OnInit } from '@angular/core';
import { Conferencia } from '../conferencia';
import { ConferenciaService } from '../conferencia.service';

@Component({
  selector: 'app-conferencias-list',
  templateUrl: './conferencias-list.component.html',
  styleUrls: ['./conferencias-list.component.css']
})
export class ConferenciasListComponent implements OnInit {

  conferencias: Array<Conferencia> = [];
  constructor(private conferenciaService: ConferenciaService) { }

  getConferencias(): void{
    this.conferenciaService.getConferencias().subscribe((conferencias) => {
      this.conferencias = conferencias;
    });
  }

  ngOnInit() {
    this.getConferencias();
  }

}
