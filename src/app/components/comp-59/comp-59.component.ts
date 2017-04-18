import { Component, OnInit } from '@angular/core';
import { Service59Service } from '../../services/service-59.service';

@Component({
  selector: 'app-comp-59',
  templateUrl: './comp-59.component.html',
  styleUrls: ['./comp-59.component.css']
})
export class Comp59Component implements OnInit {

  constructor(private _service: Service59Service) { }

  ngOnInit() {
  }

}
