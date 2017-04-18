import { Component, OnInit } from '@angular/core';
import { Service627Service } from '../../services/service-627.service';

@Component({
  selector: 'app-comp-627',
  templateUrl: './comp-627.component.html',
  styleUrls: ['./comp-627.component.css']
})
export class Comp627Component implements OnInit {

  constructor(private _service: Service627Service) { }

  ngOnInit() {
  }

}
