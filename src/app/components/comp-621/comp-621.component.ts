import { Component, OnInit } from '@angular/core';
import { Service621Service } from '../../services/service-621.service';

@Component({
  selector: 'app-comp-621',
  templateUrl: './comp-621.component.html',
  styleUrls: ['./comp-621.component.css']
})
export class Comp621Component implements OnInit {

  constructor(private _service: Service621Service) { }

  ngOnInit() {
  }

}
