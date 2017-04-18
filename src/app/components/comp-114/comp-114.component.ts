import { Component, OnInit } from '@angular/core';
import { Service114Service } from '../../services/service-114.service';

@Component({
  selector: 'app-comp-114',
  templateUrl: './comp-114.component.html',
  styleUrls: ['./comp-114.component.css']
})
export class Comp114Component implements OnInit {

  constructor(private _service: Service114Service) { }

  ngOnInit() {
  }

}
