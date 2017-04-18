import { Component, OnInit } from '@angular/core';
import { Service404Service } from '../../services/service-404.service';

@Component({
  selector: 'app-comp-404',
  templateUrl: './comp-404.component.html',
  styleUrls: ['./comp-404.component.css']
})
export class Comp404Component implements OnInit {

  constructor(private _service: Service404Service) { }

  ngOnInit() {
  }

}
