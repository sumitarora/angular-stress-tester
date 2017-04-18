import { Component, OnInit } from '@angular/core';
import { Service487Service } from '../../services/service-487.service';

@Component({
  selector: 'app-comp-487',
  templateUrl: './comp-487.component.html',
  styleUrls: ['./comp-487.component.css']
})
export class Comp487Component implements OnInit {

  constructor(private _service: Service487Service) { }

  ngOnInit() {
  }

}
