import { Component, OnInit } from '@angular/core';
import { Service668Service } from '../../services/service-668.service';

@Component({
  selector: 'app-comp-668',
  templateUrl: './comp-668.component.html',
  styleUrls: ['./comp-668.component.css']
})
export class Comp668Component implements OnInit {

  constructor(private _service: Service668Service) { }

  ngOnInit() {
  }

}
