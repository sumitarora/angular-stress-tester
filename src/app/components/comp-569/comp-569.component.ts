import { Component, OnInit } from '@angular/core';
import { Service569Service } from '../../services/service-569.service';

@Component({
  selector: 'app-comp-569',
  templateUrl: './comp-569.component.html',
  styleUrls: ['./comp-569.component.css']
})
export class Comp569Component implements OnInit {

  constructor(private _service: Service569Service) { }

  ngOnInit() {
  }

}
