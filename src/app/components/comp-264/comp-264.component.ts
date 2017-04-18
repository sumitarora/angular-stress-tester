import { Component, OnInit } from '@angular/core';
import { Service264Service } from '../../services/service-264.service';

@Component({
  selector: 'app-comp-264',
  templateUrl: './comp-264.component.html',
  styleUrls: ['./comp-264.component.css']
})
export class Comp264Component implements OnInit {

  constructor(private _service: Service264Service) { }

  ngOnInit() {
  }

}
