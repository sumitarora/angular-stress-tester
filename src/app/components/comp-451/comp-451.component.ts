import { Component, OnInit } from '@angular/core';
import { Service451Service } from '../../services/service-451.service';

@Component({
  selector: 'app-comp-451',
  templateUrl: './comp-451.component.html',
  styleUrls: ['./comp-451.component.css']
})
export class Comp451Component implements OnInit {

  constructor(private _service: Service451Service) { }

  ngOnInit() {
  }

}
