import { Component, OnInit } from '@angular/core';
import { Service516Service } from '../../services/service-516.service';

@Component({
  selector: 'app-comp-516',
  templateUrl: './comp-516.component.html',
  styleUrls: ['./comp-516.component.css']
})
export class Comp516Component implements OnInit {

  constructor(private _service: Service516Service) { }

  ngOnInit() {
  }

}
