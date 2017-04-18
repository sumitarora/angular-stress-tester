import { Component, OnInit } from '@angular/core';
import { Service84Service } from '../../services/service-84.service';

@Component({
  selector: 'app-comp-84',
  templateUrl: './comp-84.component.html',
  styleUrls: ['./comp-84.component.css']
})
export class Comp84Component implements OnInit {

  constructor(private _service: Service84Service) { }

  ngOnInit() {
  }

}
