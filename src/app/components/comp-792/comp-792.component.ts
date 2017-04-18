import { Component, OnInit } from '@angular/core';
import { Service792Service } from '../../services/service-792.service';

@Component({
  selector: 'app-comp-792',
  templateUrl: './comp-792.component.html',
  styleUrls: ['./comp-792.component.css']
})
export class Comp792Component implements OnInit {

  constructor(private _service: Service792Service) { }

  ngOnInit() {
  }

}
