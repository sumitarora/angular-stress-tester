import { Component, OnInit } from '@angular/core';
import { Service650Service } from '../../services/service-650.service';

@Component({
  selector: 'app-comp-650',
  templateUrl: './comp-650.component.html',
  styleUrls: ['./comp-650.component.css']
})
export class Comp650Component implements OnInit {

  constructor(private _service: Service650Service) { }

  ngOnInit() {
  }

}
