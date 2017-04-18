import { Component, OnInit } from '@angular/core';
import { Service988Service } from '../../services/service-988.service';

@Component({
  selector: 'app-comp-988',
  templateUrl: './comp-988.component.html',
  styleUrls: ['./comp-988.component.css']
})
export class Comp988Component implements OnInit {

  constructor(private _service: Service988Service) { }

  ngOnInit() {
  }

}
