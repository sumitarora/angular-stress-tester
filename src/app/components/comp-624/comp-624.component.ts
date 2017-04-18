import { Component, OnInit } from '@angular/core';
import { Service624Service } from '../../services/service-624.service';

@Component({
  selector: 'app-comp-624',
  templateUrl: './comp-624.component.html',
  styleUrls: ['./comp-624.component.css']
})
export class Comp624Component implements OnInit {

  constructor(private _service: Service624Service) { }

  ngOnInit() {
  }

}
