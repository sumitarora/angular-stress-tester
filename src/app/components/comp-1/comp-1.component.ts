import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../../services/service-1.service';

@Component({
  selector: 'app-comp-1',
  templateUrl: './comp-1.component.html',
  styleUrls: ['./comp-1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private _service: Service1Service) { }

  ngOnInit() {
  }

}
