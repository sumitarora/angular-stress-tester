import { Component, OnInit } from '@angular/core';
import { Service45Service } from '../../services/service-45.service';

@Component({
  selector: 'app-comp-45',
  templateUrl: './comp-45.component.html',
  styleUrls: ['./comp-45.component.css']
})
export class Comp45Component implements OnInit {

  constructor(private _service: Service45Service) { }

  ngOnInit() {
  }

}
