import { Component, OnInit } from '@angular/core';
import { Service281Service } from '../../services/service-281.service';

@Component({
  selector: 'app-comp-281',
  templateUrl: './comp-281.component.html',
  styleUrls: ['./comp-281.component.css']
})
export class Comp281Component implements OnInit {

  constructor(private _service: Service281Service) { }

  ngOnInit() {
  }

}
