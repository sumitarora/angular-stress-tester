import { Component, OnInit } from '@angular/core';
import { Service273Service } from '../../services/service-273.service';

@Component({
  selector: 'app-comp-273',
  templateUrl: './comp-273.component.html',
  styleUrls: ['./comp-273.component.css']
})
export class Comp273Component implements OnInit {

  constructor(private _service: Service273Service) { }

  ngOnInit() {
  }

}
