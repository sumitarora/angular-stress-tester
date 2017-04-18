import { Component, OnInit } from '@angular/core';
import { Service412Service } from '../../services/service-412.service';

@Component({
  selector: 'app-comp-412',
  templateUrl: './comp-412.component.html',
  styleUrls: ['./comp-412.component.css']
})
export class Comp412Component implements OnInit {

  constructor(private _service: Service412Service) { }

  ngOnInit() {
  }

}
