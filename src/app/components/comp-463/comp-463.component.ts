import { Component, OnInit } from '@angular/core';
import { Service463Service } from '../../services/service-463.service';

@Component({
  selector: 'app-comp-463',
  templateUrl: './comp-463.component.html',
  styleUrls: ['./comp-463.component.css']
})
export class Comp463Component implements OnInit {

  constructor(private _service: Service463Service) { }

  ngOnInit() {
  }

}
