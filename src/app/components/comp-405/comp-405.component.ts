import { Component, OnInit } from '@angular/core';
import { Service405Service } from '../../services/service-405.service';

@Component({
  selector: 'app-comp-405',
  templateUrl: './comp-405.component.html',
  styleUrls: ['./comp-405.component.css']
})
export class Comp405Component implements OnInit {

  constructor(private _service: Service405Service) { }

  ngOnInit() {
  }

}
