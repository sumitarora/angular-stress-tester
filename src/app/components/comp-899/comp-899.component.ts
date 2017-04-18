import { Component, OnInit } from '@angular/core';
import { Service899Service } from '../../services/service-899.service';

@Component({
  selector: 'app-comp-899',
  templateUrl: './comp-899.component.html',
  styleUrls: ['./comp-899.component.css']
})
export class Comp899Component implements OnInit {

  constructor(private _service: Service899Service) { }

  ngOnInit() {
  }

}
