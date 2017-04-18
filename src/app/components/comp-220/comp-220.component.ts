import { Component, OnInit } from '@angular/core';
import { Service220Service } from '../../services/service-220.service';

@Component({
  selector: 'app-comp-220',
  templateUrl: './comp-220.component.html',
  styleUrls: ['./comp-220.component.css']
})
export class Comp220Component implements OnInit {

  constructor(private _service: Service220Service) { }

  ngOnInit() {
  }

}
