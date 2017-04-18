import { Component, OnInit } from '@angular/core';
import { Service707Service } from '../../services/service-707.service';

@Component({
  selector: 'app-comp-707',
  templateUrl: './comp-707.component.html',
  styleUrls: ['./comp-707.component.css']
})
export class Comp707Component implements OnInit {

  constructor(private _service: Service707Service) { }

  ngOnInit() {
  }

}
