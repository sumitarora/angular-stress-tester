import { Component, OnInit } from '@angular/core';
import { Service969Service } from '../../services/service-969.service';

@Component({
  selector: 'app-comp-969',
  templateUrl: './comp-969.component.html',
  styleUrls: ['./comp-969.component.css']
})
export class Comp969Component implements OnInit {

  constructor(private _service: Service969Service) { }

  ngOnInit() {
  }

}
