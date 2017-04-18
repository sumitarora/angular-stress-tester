import { Component, OnInit } from '@angular/core';
import { Service341Service } from '../../services/service-341.service';

@Component({
  selector: 'app-comp-341',
  templateUrl: './comp-341.component.html',
  styleUrls: ['./comp-341.component.css']
})
export class Comp341Component implements OnInit {

  constructor(private _service: Service341Service) { }

  ngOnInit() {
  }

}
