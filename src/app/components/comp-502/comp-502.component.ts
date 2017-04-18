import { Component, OnInit } from '@angular/core';
import { Service502Service } from '../../services/service-502.service';

@Component({
  selector: 'app-comp-502',
  templateUrl: './comp-502.component.html',
  styleUrls: ['./comp-502.component.css']
})
export class Comp502Component implements OnInit {

  constructor(private _service: Service502Service) { }

  ngOnInit() {
  }

}
