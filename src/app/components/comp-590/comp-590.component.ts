import { Component, OnInit } from '@angular/core';
import { Service590Service } from '../../services/service-590.service';

@Component({
  selector: 'app-comp-590',
  templateUrl: './comp-590.component.html',
  styleUrls: ['./comp-590.component.css']
})
export class Comp590Component implements OnInit {

  constructor(private _service: Service590Service) { }

  ngOnInit() {
  }

}
