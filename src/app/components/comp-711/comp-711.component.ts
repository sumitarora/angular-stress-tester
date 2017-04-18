import { Component, OnInit } from '@angular/core';
import { Service711Service } from '../../services/service-711.service';

@Component({
  selector: 'app-comp-711',
  templateUrl: './comp-711.component.html',
  styleUrls: ['./comp-711.component.css']
})
export class Comp711Component implements OnInit {

  constructor(private _service: Service711Service) { }

  ngOnInit() {
  }

}
