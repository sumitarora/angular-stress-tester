import { Component, OnInit } from '@angular/core';
import { Service283Service } from '../../services/service-283.service';

@Component({
  selector: 'app-comp-283',
  templateUrl: './comp-283.component.html',
  styleUrls: ['./comp-283.component.css']
})
export class Comp283Component implements OnInit {

  constructor(private _service: Service283Service) { }

  ngOnInit() {
  }

}
