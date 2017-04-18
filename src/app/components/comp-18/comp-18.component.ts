import { Component, OnInit } from '@angular/core';
import { Service18Service } from '../../services/service-18.service';

@Component({
  selector: 'app-comp-18',
  templateUrl: './comp-18.component.html',
  styleUrls: ['./comp-18.component.css']
})
export class Comp18Component implements OnInit {

  constructor(private _service: Service18Service) { }

  ngOnInit() {
  }

}
