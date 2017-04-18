import { Component, OnInit } from '@angular/core';
import { Service925Service } from '../../services/service-925.service';

@Component({
  selector: 'app-comp-925',
  templateUrl: './comp-925.component.html',
  styleUrls: ['./comp-925.component.css']
})
export class Comp925Component implements OnInit {

  constructor(private _service: Service925Service) { }

  ngOnInit() {
  }

}
