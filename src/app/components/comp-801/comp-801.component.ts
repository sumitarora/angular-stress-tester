import { Component, OnInit } from '@angular/core';
import { Service801Service } from '../../services/service-801.service';

@Component({
  selector: 'app-comp-801',
  templateUrl: './comp-801.component.html',
  styleUrls: ['./comp-801.component.css']
})
export class Comp801Component implements OnInit {

  constructor(private _service: Service801Service) { }

  ngOnInit() {
  }

}
