import { Component, OnInit } from '@angular/core';
import { Service531Service } from '../../services/service-531.service';

@Component({
  selector: 'app-comp-531',
  templateUrl: './comp-531.component.html',
  styleUrls: ['./comp-531.component.css']
})
export class Comp531Component implements OnInit {

  constructor(private _service: Service531Service) { }

  ngOnInit() {
  }

}
