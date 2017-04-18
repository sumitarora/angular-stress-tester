import { Component, OnInit } from '@angular/core';
import { Service80Service } from '../../services/service-80.service';

@Component({
  selector: 'app-comp-80',
  templateUrl: './comp-80.component.html',
  styleUrls: ['./comp-80.component.css']
})
export class Comp80Component implements OnInit {

  constructor(private _service: Service80Service) { }

  ngOnInit() {
  }

}
