import { Component, OnInit } from '@angular/core';
import { Service814Service } from '../../services/service-814.service';

@Component({
  selector: 'app-comp-814',
  templateUrl: './comp-814.component.html',
  styleUrls: ['./comp-814.component.css']
})
export class Comp814Component implements OnInit {

  constructor(private _service: Service814Service) { }

  ngOnInit() {
  }

}
