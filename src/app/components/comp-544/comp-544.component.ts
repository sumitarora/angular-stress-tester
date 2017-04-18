import { Component, OnInit } from '@angular/core';
import { Service544Service } from '../../services/service-544.service';

@Component({
  selector: 'app-comp-544',
  templateUrl: './comp-544.component.html',
  styleUrls: ['./comp-544.component.css']
})
export class Comp544Component implements OnInit {

  constructor(private _service: Service544Service) { }

  ngOnInit() {
  }

}
