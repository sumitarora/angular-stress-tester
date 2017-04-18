import { Component, OnInit } from '@angular/core';
import { Service763Service } from '../../services/service-763.service';

@Component({
  selector: 'app-comp-763',
  templateUrl: './comp-763.component.html',
  styleUrls: ['./comp-763.component.css']
})
export class Comp763Component implements OnInit {

  constructor(private _service: Service763Service) { }

  ngOnInit() {
  }

}
