import { Component, OnInit } from '@angular/core';
import { Service709Service } from '../../services/service-709.service';

@Component({
  selector: 'app-comp-709',
  templateUrl: './comp-709.component.html',
  styleUrls: ['./comp-709.component.css']
})
export class Comp709Component implements OnInit {

  constructor(private _service: Service709Service) { }

  ngOnInit() {
  }

}
