import { Component, OnInit } from '@angular/core';
import { Service822Service } from '../../services/service-822.service';

@Component({
  selector: 'app-comp-822',
  templateUrl: './comp-822.component.html',
  styleUrls: ['./comp-822.component.css']
})
export class Comp822Component implements OnInit {

  constructor(private _service: Service822Service) { }

  ngOnInit() {
  }

}
