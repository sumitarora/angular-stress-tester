import { Component, OnInit } from '@angular/core';
import { Service889Service } from '../../services/service-889.service';

@Component({
  selector: 'app-comp-889',
  templateUrl: './comp-889.component.html',
  styleUrls: ['./comp-889.component.css']
})
export class Comp889Component implements OnInit {

  constructor(private _service: Service889Service) { }

  ngOnInit() {
  }

}
