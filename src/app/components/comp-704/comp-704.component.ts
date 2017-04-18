import { Component, OnInit } from '@angular/core';
import { Service704Service } from '../../services/service-704.service';

@Component({
  selector: 'app-comp-704',
  templateUrl: './comp-704.component.html',
  styleUrls: ['./comp-704.component.css']
})
export class Comp704Component implements OnInit {

  constructor(private _service: Service704Service) { }

  ngOnInit() {
  }

}
