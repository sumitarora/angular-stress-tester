import { Component, OnInit } from '@angular/core';
import { Service500Service } from '../../services/service-500.service';

@Component({
  selector: 'app-comp-500',
  templateUrl: './comp-500.component.html',
  styleUrls: ['./comp-500.component.css']
})
export class Comp500Component implements OnInit {

  constructor(private _service: Service500Service) { }

  ngOnInit() {
  }

}
