import { Component, OnInit } from '@angular/core';
import { Service199Service } from '../../services/service-199.service';

@Component({
  selector: 'app-comp-199',
  templateUrl: './comp-199.component.html',
  styleUrls: ['./comp-199.component.css']
})
export class Comp199Component implements OnInit {

  constructor(private _service: Service199Service) { }

  ngOnInit() {
  }

}
