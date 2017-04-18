import { Component, OnInit } from '@angular/core';
import { Service523Service } from '../../services/service-523.service';

@Component({
  selector: 'app-comp-523',
  templateUrl: './comp-523.component.html',
  styleUrls: ['./comp-523.component.css']
})
export class Comp523Component implements OnInit {

  constructor(private _service: Service523Service) { }

  ngOnInit() {
  }

}
