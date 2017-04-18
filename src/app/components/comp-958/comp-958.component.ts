import { Component, OnInit } from '@angular/core';
import { Service958Service } from '../../services/service-958.service';

@Component({
  selector: 'app-comp-958',
  templateUrl: './comp-958.component.html',
  styleUrls: ['./comp-958.component.css']
})
export class Comp958Component implements OnInit {

  constructor(private _service: Service958Service) { }

  ngOnInit() {
  }

}
