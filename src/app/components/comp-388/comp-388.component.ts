import { Component, OnInit } from '@angular/core';
import { Service388Service } from '../../services/service-388.service';

@Component({
  selector: 'app-comp-388',
  templateUrl: './comp-388.component.html',
  styleUrls: ['./comp-388.component.css']
})
export class Comp388Component implements OnInit {

  constructor(private _service: Service388Service) { }

  ngOnInit() {
  }

}
