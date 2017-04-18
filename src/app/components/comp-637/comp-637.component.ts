import { Component, OnInit } from '@angular/core';
import { Service637Service } from '../../services/service-637.service';

@Component({
  selector: 'app-comp-637',
  templateUrl: './comp-637.component.html',
  styleUrls: ['./comp-637.component.css']
})
export class Comp637Component implements OnInit {

  constructor(private _service: Service637Service) { }

  ngOnInit() {
  }

}
