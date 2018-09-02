import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
	@Input() public dataPadre;
	@Output() public eventoHijo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  disparandoEvento() {
  	this.eventoHijo.emit('Disparo este evento para que se muestre al padre');
  }


}
