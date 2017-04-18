import { Component, OnInit } from '@angular/core';
import { Service995Service } from '../../services/service-995.service';

@Component({
  selector: 'app-comp-995',
  templateUrl: './comp-995.component.html',
  styleUrls: ['./comp-995.component.css']
})
export class Comp995Component implements OnInit {

  constructor(private _service: Service995Service) { }

  ngOnInit() {
  }

}
