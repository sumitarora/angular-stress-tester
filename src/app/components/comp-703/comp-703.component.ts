import { Component, OnInit } from '@angular/core';
import { Service703Service } from '../../services/service-703.service';

@Component({
  selector: 'app-comp-703',
  templateUrl: './comp-703.component.html',
  styleUrls: ['./comp-703.component.css']
})
export class Comp703Component implements OnInit {

  constructor(private _service: Service703Service) { }

  ngOnInit() {
  }

}
