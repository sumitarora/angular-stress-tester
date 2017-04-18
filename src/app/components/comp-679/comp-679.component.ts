import { Component, OnInit } from '@angular/core';
import { Service679Service } from '../../services/service-679.service';

@Component({
  selector: 'app-comp-679',
  templateUrl: './comp-679.component.html',
  styleUrls: ['./comp-679.component.css']
})
export class Comp679Component implements OnInit {

  constructor(private _service: Service679Service) { }

  ngOnInit() {
  }

}
