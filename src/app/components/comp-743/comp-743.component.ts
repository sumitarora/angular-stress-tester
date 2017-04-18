import { Component, OnInit } from '@angular/core';
import { Service743Service } from '../../services/service-743.service';

@Component({
  selector: 'app-comp-743',
  templateUrl: './comp-743.component.html',
  styleUrls: ['./comp-743.component.css']
})
export class Comp743Component implements OnInit {

  constructor(private _service: Service743Service) { }

  ngOnInit() {
  }

}
