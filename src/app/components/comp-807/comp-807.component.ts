import { Component, OnInit } from '@angular/core';
import { Service807Service } from '../../services/service-807.service';

@Component({
  selector: 'app-comp-807',
  templateUrl: './comp-807.component.html',
  styleUrls: ['./comp-807.component.css']
})
export class Comp807Component implements OnInit {

  constructor(private _service: Service807Service) { }

  ngOnInit() {
  }

}
