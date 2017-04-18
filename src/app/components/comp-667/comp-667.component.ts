import { Component, OnInit } from '@angular/core';
import { Service667Service } from '../../services/service-667.service';

@Component({
  selector: 'app-comp-667',
  templateUrl: './comp-667.component.html',
  styleUrls: ['./comp-667.component.css']
})
export class Comp667Component implements OnInit {

  constructor(private _service: Service667Service) { }

  ngOnInit() {
  }

}
