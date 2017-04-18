import { Component, OnInit } from '@angular/core';
import { Service510Service } from '../../services/service-510.service';

@Component({
  selector: 'app-comp-510',
  templateUrl: './comp-510.component.html',
  styleUrls: ['./comp-510.component.css']
})
export class Comp510Component implements OnInit {

  constructor(private _service: Service510Service) { }

  ngOnInit() {
  }

}
