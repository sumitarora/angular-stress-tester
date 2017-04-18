import { Component, OnInit } from '@angular/core';
import { Service387Service } from '../../services/service-387.service';

@Component({
  selector: 'app-comp-387',
  templateUrl: './comp-387.component.html',
  styleUrls: ['./comp-387.component.css']
})
export class Comp387Component implements OnInit {

  constructor(private _service: Service387Service) { }

  ngOnInit() {
  }

}
