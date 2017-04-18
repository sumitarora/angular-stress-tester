import { Component, OnInit } from '@angular/core';
import { Service496Service } from '../../services/service-496.service';

@Component({
  selector: 'app-comp-496',
  templateUrl: './comp-496.component.html',
  styleUrls: ['./comp-496.component.css']
})
export class Comp496Component implements OnInit {

  constructor(private _service: Service496Service) { }

  ngOnInit() {
  }

}
