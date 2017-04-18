import { Component, OnInit } from '@angular/core';
import { Service975Service } from '../../services/service-975.service';

@Component({
  selector: 'app-comp-975',
  templateUrl: './comp-975.component.html',
  styleUrls: ['./comp-975.component.css']
})
export class Comp975Component implements OnInit {

  constructor(private _service: Service975Service) { }

  ngOnInit() {
  }

}
