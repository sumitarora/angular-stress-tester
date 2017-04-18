import { Component, OnInit } from '@angular/core';
import { Service323Service } from '../../services/service-323.service';

@Component({
  selector: 'app-comp-323',
  templateUrl: './comp-323.component.html',
  styleUrls: ['./comp-323.component.css']
})
export class Comp323Component implements OnInit {

  constructor(private _service: Service323Service) { }

  ngOnInit() {
  }

}
