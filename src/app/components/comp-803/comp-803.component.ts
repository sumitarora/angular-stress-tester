import { Component, OnInit } from '@angular/core';
import { Service803Service } from '../../services/service-803.service';

@Component({
  selector: 'app-comp-803',
  templateUrl: './comp-803.component.html',
  styleUrls: ['./comp-803.component.css']
})
export class Comp803Component implements OnInit {

  constructor(private _service: Service803Service) { }

  ngOnInit() {
  }

}
