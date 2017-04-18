import { Component, OnInit } from '@angular/core';
import { Service735Service } from '../../services/service-735.service';

@Component({
  selector: 'app-comp-735',
  templateUrl: './comp-735.component.html',
  styleUrls: ['./comp-735.component.css']
})
export class Comp735Component implements OnInit {

  constructor(private _service: Service735Service) { }

  ngOnInit() {
  }

}
