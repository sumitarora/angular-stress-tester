import { Component, OnInit } from '@angular/core';
import { Service63Service } from '../../services/service-63.service';

@Component({
  selector: 'app-comp-63',
  templateUrl: './comp-63.component.html',
  styleUrls: ['./comp-63.component.css']
})
export class Comp63Component implements OnInit {

  constructor(private _service: Service63Service) { }

  ngOnInit() {
  }

}
