import { Component, OnInit } from '@angular/core';
import { Service715Service } from '../../services/service-715.service';

@Component({
  selector: 'app-comp-715',
  templateUrl: './comp-715.component.html',
  styleUrls: ['./comp-715.component.css']
})
export class Comp715Component implements OnInit {

  constructor(private _service: Service715Service) { }

  ngOnInit() {
  }

}
