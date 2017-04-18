import { Component, OnInit } from '@angular/core';
import { Service987Service } from '../../services/service-987.service';

@Component({
  selector: 'app-comp-987',
  templateUrl: './comp-987.component.html',
  styleUrls: ['./comp-987.component.css']
})
export class Comp987Component implements OnInit {

  constructor(private _service: Service987Service) { }

  ngOnInit() {
  }

}
