import { Component, OnInit } from '@angular/core';
import { Service873Service } from '../../services/service-873.service';

@Component({
  selector: 'app-comp-873',
  templateUrl: './comp-873.component.html',
  styleUrls: ['./comp-873.component.css']
})
export class Comp873Component implements OnInit {

  constructor(private _service: Service873Service) { }

  ngOnInit() {
  }

}
