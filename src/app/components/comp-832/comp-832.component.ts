import { Component, OnInit } from '@angular/core';
import { Service832Service } from '../../services/service-832.service';

@Component({
  selector: 'app-comp-832',
  templateUrl: './comp-832.component.html',
  styleUrls: ['./comp-832.component.css']
})
export class Comp832Component implements OnInit {

  constructor(private _service: Service832Service) { }

  ngOnInit() {
  }

}
