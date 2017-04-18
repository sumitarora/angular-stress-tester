import { Component, OnInit } from '@angular/core';
import { Service584Service } from '../../services/service-584.service';

@Component({
  selector: 'app-comp-584',
  templateUrl: './comp-584.component.html',
  styleUrls: ['./comp-584.component.css']
})
export class Comp584Component implements OnInit {

  constructor(private _service: Service584Service) { }

  ngOnInit() {
  }

}
