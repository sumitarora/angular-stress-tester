import { Component, OnInit } from '@angular/core';
import { Service838Service } from '../../services/service-838.service';

@Component({
  selector: 'app-comp-838',
  templateUrl: './comp-838.component.html',
  styleUrls: ['./comp-838.component.css']
})
export class Comp838Component implements OnInit {

  constructor(private _service: Service838Service) { }

  ngOnInit() {
  }

}
