import { Component, OnInit } from '@angular/core';
import { Service470Service } from '../../services/service-470.service';

@Component({
  selector: 'app-comp-470',
  templateUrl: './comp-470.component.html',
  styleUrls: ['./comp-470.component.css']
})
export class Comp470Component implements OnInit {

  constructor(private _service: Service470Service) { }

  ngOnInit() {
  }

}
