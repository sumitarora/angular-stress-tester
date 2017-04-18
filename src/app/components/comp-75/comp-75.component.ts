import { Component, OnInit } from '@angular/core';
import { Service75Service } from '../../services/service-75.service';

@Component({
  selector: 'app-comp-75',
  templateUrl: './comp-75.component.html',
  styleUrls: ['./comp-75.component.css']
})
export class Comp75Component implements OnInit {

  constructor(private _service: Service75Service) { }

  ngOnInit() {
  }

}
