import { Component, OnInit } from '@angular/core';
import { Service678Service } from '../../services/service-678.service';

@Component({
  selector: 'app-comp-678',
  templateUrl: './comp-678.component.html',
  styleUrls: ['./comp-678.component.css']
})
export class Comp678Component implements OnInit {

  constructor(private _service: Service678Service) { }

  ngOnInit() {
  }

}
