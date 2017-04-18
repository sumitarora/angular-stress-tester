import { Component, OnInit } from '@angular/core';
import { Service67Service } from '../../services/service-67.service';

@Component({
  selector: 'app-comp-67',
  templateUrl: './comp-67.component.html',
  styleUrls: ['./comp-67.component.css']
})
export class Comp67Component implements OnInit {

  constructor(private _service: Service67Service) { }

  ngOnInit() {
  }

}
