import { Component, OnInit } from '@angular/core';
import { Service134Service } from '../../services/service-134.service';

@Component({
  selector: 'app-comp-134',
  templateUrl: './comp-134.component.html',
  styleUrls: ['./comp-134.component.css']
})
export class Comp134Component implements OnInit {

  constructor(private _service: Service134Service) { }

  ngOnInit() {
  }

}
