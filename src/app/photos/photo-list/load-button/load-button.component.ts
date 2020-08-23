import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.css']
})
export class LoadButtonComponent implements OnInit {

  @Input() hasMore: boolean = false; //@Input() o valor vai vir de fora, quem usar vai passar o 'false' ou 'true'

  constructor() { }

  ngOnInit() {
  }

}
