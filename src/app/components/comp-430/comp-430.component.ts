import { Component, OnInit } from '@angular/core';
import { Service430Service } from '../../services/service-430.service';

@Component({
  selector: 'app-comp-430',
  templateUrl: './comp-430.component.html',
  styleUrls: ['./comp-430.component.css']
})
export class Comp430Component implements OnInit {

  constructor(private _service: Service430Service) { }

  ngOnInit() {
  }

}
