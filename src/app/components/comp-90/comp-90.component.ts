import { Component, OnInit } from '@angular/core';
import { Service90Service } from '../../services/service-90.service';

@Component({
  selector: 'app-comp-90',
  templateUrl: './comp-90.component.html',
  styleUrls: ['./comp-90.component.css']
})
export class Comp90Component implements OnInit {

  constructor(private _service: Service90Service) { }

  ngOnInit() {
  }

}
