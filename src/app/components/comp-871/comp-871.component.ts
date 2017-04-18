import { Component, OnInit } from '@angular/core';
import { Service871Service } from '../../services/service-871.service';

@Component({
  selector: 'app-comp-871',
  templateUrl: './comp-871.component.html',
  styleUrls: ['./comp-871.component.css']
})
export class Comp871Component implements OnInit {

  constructor(private _service: Service871Service) { }

  ngOnInit() {
  }

}
