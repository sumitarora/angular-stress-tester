import { Component, OnInit } from '@angular/core';
import { Service180Service } from '../../services/service-180.service';

@Component({
  selector: 'app-comp-180',
  templateUrl: './comp-180.component.html',
  styleUrls: ['./comp-180.component.css']
})
export class Comp180Component implements OnInit {

  constructor(private _service: Service180Service) { }

  ngOnInit() {
  }

}
