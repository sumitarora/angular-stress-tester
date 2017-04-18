import { Component, OnInit } from '@angular/core';
import { Service377Service } from '../../services/service-377.service';

@Component({
  selector: 'app-comp-377',
  templateUrl: './comp-377.component.html',
  styleUrls: ['./comp-377.component.css']
})
export class Comp377Component implements OnInit {

  constructor(private _service: Service377Service) { }

  ngOnInit() {
  }

}
