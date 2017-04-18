import { Component, OnInit } from '@angular/core';
import { Service598Service } from '../../services/service-598.service';

@Component({
  selector: 'app-comp-598',
  templateUrl: './comp-598.component.html',
  styleUrls: ['./comp-598.component.css']
})
export class Comp598Component implements OnInit {

  constructor(private _service: Service598Service) { }

  ngOnInit() {
  }

}
