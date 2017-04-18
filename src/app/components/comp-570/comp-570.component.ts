import { Component, OnInit } from '@angular/core';
import { Service570Service } from '../../services/service-570.service';

@Component({
  selector: 'app-comp-570',
  templateUrl: './comp-570.component.html',
  styleUrls: ['./comp-570.component.css']
})
export class Comp570Component implements OnInit {

  constructor(private _service: Service570Service) { }

  ngOnInit() {
  }

}
