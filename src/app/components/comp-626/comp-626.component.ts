import { Component, OnInit } from '@angular/core';
import { Service626Service } from '../../services/service-626.service';

@Component({
  selector: 'app-comp-626',
  templateUrl: './comp-626.component.html',
  styleUrls: ['./comp-626.component.css']
})
export class Comp626Component implements OnInit {

  constructor(private _service: Service626Service) { }

  ngOnInit() {
  }

}
