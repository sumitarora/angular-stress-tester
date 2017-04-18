import { Component, OnInit } from '@angular/core';
import { Service683Service } from '../../services/service-683.service';

@Component({
  selector: 'app-comp-683',
  templateUrl: './comp-683.component.html',
  styleUrls: ['./comp-683.component.css']
})
export class Comp683Component implements OnInit {

  constructor(private _service: Service683Service) { }

  ngOnInit() {
  }

}
