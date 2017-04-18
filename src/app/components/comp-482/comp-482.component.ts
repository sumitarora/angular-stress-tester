import { Component, OnInit } from '@angular/core';
import { Service482Service } from '../../services/service-482.service';

@Component({
  selector: 'app-comp-482',
  templateUrl: './comp-482.component.html',
  styleUrls: ['./comp-482.component.css']
})
export class Comp482Component implements OnInit {

  constructor(private _service: Service482Service) { }

  ngOnInit() {
  }

}
