import { Component, OnInit } from '@angular/core';
import { Service534Service } from '../../services/service-534.service';

@Component({
  selector: 'app-comp-534',
  templateUrl: './comp-534.component.html',
  styleUrls: ['./comp-534.component.css']
})
export class Comp534Component implements OnInit {

  constructor(private _service: Service534Service) { }

  ngOnInit() {
  }

}
