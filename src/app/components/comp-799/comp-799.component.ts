import { Component, OnInit } from '@angular/core';
import { Service799Service } from '../../services/service-799.service';

@Component({
  selector: 'app-comp-799',
  templateUrl: './comp-799.component.html',
  styleUrls: ['./comp-799.component.css']
})
export class Comp799Component implements OnInit {

  constructor(private _service: Service799Service) { }

  ngOnInit() {
  }

}
