import { Component, OnInit } from '@angular/core';
import { Service881Service } from '../../services/service-881.service';

@Component({
  selector: 'app-comp-881',
  templateUrl: './comp-881.component.html',
  styleUrls: ['./comp-881.component.css']
})
export class Comp881Component implements OnInit {

  constructor(private _service: Service881Service) { }

  ngOnInit() {
  }

}
