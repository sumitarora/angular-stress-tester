import { Component, OnInit } from '@angular/core';
import { Service126Service } from '../../services/service-126.service';

@Component({
  selector: 'app-comp-126',
  templateUrl: './comp-126.component.html',
  styleUrls: ['./comp-126.component.css']
})
export class Comp126Component implements OnInit {

  constructor(private _service: Service126Service) { }

  ngOnInit() {
  }

}
