import { Component, OnInit } from '@angular/core';
import { Service700Service } from '../../services/service-700.service';

@Component({
  selector: 'app-comp-700',
  templateUrl: './comp-700.component.html',
  styleUrls: ['./comp-700.component.css']
})
export class Comp700Component implements OnInit {

  constructor(private _service: Service700Service) { }

  ngOnInit() {
  }

}
