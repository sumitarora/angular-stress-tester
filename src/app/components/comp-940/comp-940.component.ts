import { Component, OnInit } from '@angular/core';
import { Service940Service } from '../../services/service-940.service';

@Component({
  selector: 'app-comp-940',
  templateUrl: './comp-940.component.html',
  styleUrls: ['./comp-940.component.css']
})
export class Comp940Component implements OnInit {

  constructor(private _service: Service940Service) { }

  ngOnInit() {
  }

}
