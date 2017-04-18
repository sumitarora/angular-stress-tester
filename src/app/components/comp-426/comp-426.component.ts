import { Component, OnInit } from '@angular/core';
import { Service426Service } from '../../services/service-426.service';

@Component({
  selector: 'app-comp-426',
  templateUrl: './comp-426.component.html',
  styleUrls: ['./comp-426.component.css']
})
export class Comp426Component implements OnInit {

  constructor(private _service: Service426Service) { }

  ngOnInit() {
  }

}
