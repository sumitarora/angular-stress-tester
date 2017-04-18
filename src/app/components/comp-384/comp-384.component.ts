import { Component, OnInit } from '@angular/core';
import { Service384Service } from '../../services/service-384.service';

@Component({
  selector: 'app-comp-384',
  templateUrl: './comp-384.component.html',
  styleUrls: ['./comp-384.component.css']
})
export class Comp384Component implements OnInit {

  constructor(private _service: Service384Service) { }

  ngOnInit() {
  }

}
