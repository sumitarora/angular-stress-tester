import { Component, OnInit } from '@angular/core';
import { Service783Service } from '../../services/service-783.service';

@Component({
  selector: 'app-comp-783',
  templateUrl: './comp-783.component.html',
  styleUrls: ['./comp-783.component.css']
})
export class Comp783Component implements OnInit {

  constructor(private _service: Service783Service) { }

  ngOnInit() {
  }

}
