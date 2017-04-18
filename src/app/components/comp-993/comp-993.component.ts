import { Component, OnInit } from '@angular/core';
import { Service993Service } from '../../services/service-993.service';

@Component({
  selector: 'app-comp-993',
  templateUrl: './comp-993.component.html',
  styleUrls: ['./comp-993.component.css']
})
export class Comp993Component implements OnInit {

  constructor(private _service: Service993Service) { }

  ngOnInit() {
  }

}
