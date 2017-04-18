import { Component, OnInit } from '@angular/core';
import { Service401Service } from '../../services/service-401.service';

@Component({
  selector: 'app-comp-401',
  templateUrl: './comp-401.component.html',
  styleUrls: ['./comp-401.component.css']
})
export class Comp401Component implements OnInit {

  constructor(private _service: Service401Service) { }

  ngOnInit() {
  }

}
