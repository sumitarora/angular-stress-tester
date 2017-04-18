import { Component, OnInit } from '@angular/core';
import { Service607Service } from '../../services/service-607.service';

@Component({
  selector: 'app-comp-607',
  templateUrl: './comp-607.component.html',
  styleUrls: ['./comp-607.component.css']
})
export class Comp607Component implements OnInit {

  constructor(private _service: Service607Service) { }

  ngOnInit() {
  }

}
