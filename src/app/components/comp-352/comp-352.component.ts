import { Component, OnInit } from '@angular/core';
import { Service352Service } from '../../services/service-352.service';

@Component({
  selector: 'app-comp-352',
  templateUrl: './comp-352.component.html',
  styleUrls: ['./comp-352.component.css']
})
export class Comp352Component implements OnInit {

  constructor(private _service: Service352Service) { }

  ngOnInit() {
  }

}
