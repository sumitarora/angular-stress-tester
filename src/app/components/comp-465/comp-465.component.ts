import { Component, OnInit } from '@angular/core';
import { Service465Service } from '../../services/service-465.service';

@Component({
  selector: 'app-comp-465',
  templateUrl: './comp-465.component.html',
  styleUrls: ['./comp-465.component.css']
})
export class Comp465Component implements OnInit {

  constructor(private _service: Service465Service) { }

  ngOnInit() {
  }

}
