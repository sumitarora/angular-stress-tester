import { Component, OnInit } from '@angular/core';
import { Service211Service } from '../../services/service-211.service';

@Component({
  selector: 'app-comp-211',
  templateUrl: './comp-211.component.html',
  styleUrls: ['./comp-211.component.css']
})
export class Comp211Component implements OnInit {

  constructor(private _service: Service211Service) { }

  ngOnInit() {
  }

}
