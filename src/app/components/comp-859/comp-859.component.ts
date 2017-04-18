import { Component, OnInit } from '@angular/core';
import { Service859Service } from '../../services/service-859.service';

@Component({
  selector: 'app-comp-859',
  templateUrl: './comp-859.component.html',
  styleUrls: ['./comp-859.component.css']
})
export class Comp859Component implements OnInit {

  constructor(private _service: Service859Service) { }

  ngOnInit() {
  }

}
