import { Component, OnInit } from '@angular/core';
import { Service491Service } from '../../services/service-491.service';

@Component({
  selector: 'app-comp-491',
  templateUrl: './comp-491.component.html',
  styleUrls: ['./comp-491.component.css']
})
export class Comp491Component implements OnInit {

  constructor(private _service: Service491Service) { }

  ngOnInit() {
  }

}
