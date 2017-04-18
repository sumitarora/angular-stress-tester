import { Component, OnInit } from '@angular/core';
import { Service39Service } from '../../services/service-39.service';

@Component({
  selector: 'app-comp-39',
  templateUrl: './comp-39.component.html',
  styleUrls: ['./comp-39.component.css']
})
export class Comp39Component implements OnInit {

  constructor(private _service: Service39Service) { }

  ngOnInit() {
  }

}
