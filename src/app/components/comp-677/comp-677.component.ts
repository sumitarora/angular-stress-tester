import { Component, OnInit } from '@angular/core';
import { Service677Service } from '../../services/service-677.service';

@Component({
  selector: 'app-comp-677',
  templateUrl: './comp-677.component.html',
  styleUrls: ['./comp-677.component.css']
})
export class Comp677Component implements OnInit {

  constructor(private _service: Service677Service) { }

  ngOnInit() {
  }

}
