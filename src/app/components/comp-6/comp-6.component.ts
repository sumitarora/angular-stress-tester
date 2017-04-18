import { Component, OnInit } from '@angular/core';
import { Service6Service } from '../../services/service-6.service';

@Component({
  selector: 'app-comp-6',
  templateUrl: './comp-6.component.html',
  styleUrls: ['./comp-6.component.css']
})
export class Comp6Component implements OnInit {

  constructor(private _service: Service6Service) { }

  ngOnInit() {
  }

}
