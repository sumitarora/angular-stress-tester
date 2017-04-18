import { Component, OnInit } from '@angular/core';
import { Service776Service } from '../../services/service-776.service';

@Component({
  selector: 'app-comp-776',
  templateUrl: './comp-776.component.html',
  styleUrls: ['./comp-776.component.css']
})
export class Comp776Component implements OnInit {

  constructor(private _service: Service776Service) { }

  ngOnInit() {
  }

}
