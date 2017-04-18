import { Component, OnInit } from '@angular/core';
import { Service915Service } from '../../services/service-915.service';

@Component({
  selector: 'app-comp-915',
  templateUrl: './comp-915.component.html',
  styleUrls: ['./comp-915.component.css']
})
export class Comp915Component implements OnInit {

  constructor(private _service: Service915Service) { }

  ngOnInit() {
  }

}
