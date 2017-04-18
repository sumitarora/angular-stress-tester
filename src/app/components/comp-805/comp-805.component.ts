import { Component, OnInit } from '@angular/core';
import { Service805Service } from '../../services/service-805.service';

@Component({
  selector: 'app-comp-805',
  templateUrl: './comp-805.component.html',
  styleUrls: ['./comp-805.component.css']
})
export class Comp805Component implements OnInit {

  constructor(private _service: Service805Service) { }

  ngOnInit() {
  }

}
