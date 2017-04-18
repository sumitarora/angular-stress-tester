import { Component, OnInit } from '@angular/core';
import { Service200Service } from '../../services/service-200.service';

@Component({
  selector: 'app-comp-200',
  templateUrl: './comp-200.component.html',
  styleUrls: ['./comp-200.component.css']
})
export class Comp200Component implements OnInit {

  constructor(private _service: Service200Service) { }

  ngOnInit() {
  }

}
