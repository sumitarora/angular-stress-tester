import { Component, OnInit } from '@angular/core';
import { Service164Service } from '../../services/service-164.service';

@Component({
  selector: 'app-comp-164',
  templateUrl: './comp-164.component.html',
  styleUrls: ['./comp-164.component.css']
})
export class Comp164Component implements OnInit {

  constructor(private _service: Service164Service) { }

  ngOnInit() {
  }

}
