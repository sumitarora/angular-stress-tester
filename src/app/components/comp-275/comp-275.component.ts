import { Component, OnInit } from '@angular/core';
import { Service275Service } from '../../services/service-275.service';

@Component({
  selector: 'app-comp-275',
  templateUrl: './comp-275.component.html',
  styleUrls: ['./comp-275.component.css']
})
export class Comp275Component implements OnInit {

  constructor(private _service: Service275Service) { }

  ngOnInit() {
  }

}
