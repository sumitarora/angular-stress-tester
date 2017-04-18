import { Component, OnInit } from '@angular/core';
import { Service353Service } from '../../services/service-353.service';

@Component({
  selector: 'app-comp-353',
  templateUrl: './comp-353.component.html',
  styleUrls: ['./comp-353.component.css']
})
export class Comp353Component implements OnInit {

  constructor(private _service: Service353Service) { }

  ngOnInit() {
  }

}
