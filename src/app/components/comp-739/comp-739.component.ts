import { Component, OnInit } from '@angular/core';
import { Service739Service } from '../../services/service-739.service';

@Component({
  selector: 'app-comp-739',
  templateUrl: './comp-739.component.html',
  styleUrls: ['./comp-739.component.css']
})
export class Comp739Component implements OnInit {

  constructor(private _service: Service739Service) { }

  ngOnInit() {
  }

}
