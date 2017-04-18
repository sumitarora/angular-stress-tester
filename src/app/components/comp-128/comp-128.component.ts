import { Component, OnInit } from '@angular/core';
import { Service128Service } from '../../services/service-128.service';

@Component({
  selector: 'app-comp-128',
  templateUrl: './comp-128.component.html',
  styleUrls: ['./comp-128.component.css']
})
export class Comp128Component implements OnInit {

  constructor(private _service: Service128Service) { }

  ngOnInit() {
  }

}
