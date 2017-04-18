import { Component, OnInit } from '@angular/core';
import { Service623Service } from '../../services/service-623.service';

@Component({
  selector: 'app-comp-623',
  templateUrl: './comp-623.component.html',
  styleUrls: ['./comp-623.component.css']
})
export class Comp623Component implements OnInit {

  constructor(private _service: Service623Service) { }

  ngOnInit() {
  }

}
