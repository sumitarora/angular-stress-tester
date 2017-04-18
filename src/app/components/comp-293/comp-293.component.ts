import { Component, OnInit } from '@angular/core';
import { Service293Service } from '../../services/service-293.service';

@Component({
  selector: 'app-comp-293',
  templateUrl: './comp-293.component.html',
  styleUrls: ['./comp-293.component.css']
})
export class Comp293Component implements OnInit {

  constructor(private _service: Service293Service) { }

  ngOnInit() {
  }

}
