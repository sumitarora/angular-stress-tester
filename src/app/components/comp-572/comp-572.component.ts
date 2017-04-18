import { Component, OnInit } from '@angular/core';
import { Service572Service } from '../../services/service-572.service';

@Component({
  selector: 'app-comp-572',
  templateUrl: './comp-572.component.html',
  styleUrls: ['./comp-572.component.css']
})
export class Comp572Component implements OnInit {

  constructor(private _service: Service572Service) { }

  ngOnInit() {
  }

}
