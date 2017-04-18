import { Component, OnInit } from '@angular/core';
import { Service243Service } from '../../services/service-243.service';

@Component({
  selector: 'app-comp-243',
  templateUrl: './comp-243.component.html',
  styleUrls: ['./comp-243.component.css']
})
export class Comp243Component implements OnInit {

  constructor(private _service: Service243Service) { }

  ngOnInit() {
  }

}
