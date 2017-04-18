import { Component, OnInit } from '@angular/core';
import { Service253Service } from '../../services/service-253.service';

@Component({
  selector: 'app-comp-253',
  templateUrl: './comp-253.component.html',
  styleUrls: ['./comp-253.component.css']
})
export class Comp253Component implements OnInit {

  constructor(private _service: Service253Service) { }

  ngOnInit() {
  }

}
