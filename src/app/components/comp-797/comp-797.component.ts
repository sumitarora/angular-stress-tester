import { Component, OnInit } from '@angular/core';
import { Service797Service } from '../../services/service-797.service';

@Component({
  selector: 'app-comp-797',
  templateUrl: './comp-797.component.html',
  styleUrls: ['./comp-797.component.css']
})
export class Comp797Component implements OnInit {

  constructor(private _service: Service797Service) { }

  ngOnInit() {
  }

}
