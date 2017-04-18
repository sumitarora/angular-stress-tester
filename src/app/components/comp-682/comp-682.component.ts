import { Component, OnInit } from '@angular/core';
import { Service682Service } from '../../services/service-682.service';

@Component({
  selector: 'app-comp-682',
  templateUrl: './comp-682.component.html',
  styleUrls: ['./comp-682.component.css']
})
export class Comp682Component implements OnInit {

  constructor(private _service: Service682Service) { }

  ngOnInit() {
  }

}
