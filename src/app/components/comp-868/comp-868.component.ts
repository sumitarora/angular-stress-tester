import { Component, OnInit } from '@angular/core';
import { Service868Service } from '../../services/service-868.service';

@Component({
  selector: 'app-comp-868',
  templateUrl: './comp-868.component.html',
  styleUrls: ['./comp-868.component.css']
})
export class Comp868Component implements OnInit {

  constructor(private _service: Service868Service) { }

  ngOnInit() {
  }

}
