import { Component, OnInit } from '@angular/core';
import { Service943Service } from '../../services/service-943.service';

@Component({
  selector: 'app-comp-943',
  templateUrl: './comp-943.component.html',
  styleUrls: ['./comp-943.component.css']
})
export class Comp943Component implements OnInit {

  constructor(private _service: Service943Service) { }

  ngOnInit() {
  }

}
