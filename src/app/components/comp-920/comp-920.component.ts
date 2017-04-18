import { Component, OnInit } from '@angular/core';
import { Service920Service } from '../../services/service-920.service';

@Component({
  selector: 'app-comp-920',
  templateUrl: './comp-920.component.html',
  styleUrls: ['./comp-920.component.css']
})
export class Comp920Component implements OnInit {

  constructor(private _service: Service920Service) { }

  ngOnInit() {
  }

}
