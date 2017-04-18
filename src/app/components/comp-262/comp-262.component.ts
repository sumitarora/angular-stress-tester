import { Component, OnInit } from '@angular/core';
import { Service262Service } from '../../services/service-262.service';

@Component({
  selector: 'app-comp-262',
  templateUrl: './comp-262.component.html',
  styleUrls: ['./comp-262.component.css']
})
export class Comp262Component implements OnInit {

  constructor(private _service: Service262Service) { }

  ngOnInit() {
  }

}
