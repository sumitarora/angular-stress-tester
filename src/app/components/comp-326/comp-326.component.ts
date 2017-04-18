import { Component, OnInit } from '@angular/core';
import { Service326Service } from '../../services/service-326.service';

@Component({
  selector: 'app-comp-326',
  templateUrl: './comp-326.component.html',
  styleUrls: ['./comp-326.component.css']
})
export class Comp326Component implements OnInit {

  constructor(private _service: Service326Service) { }

  ngOnInit() {
  }

}
