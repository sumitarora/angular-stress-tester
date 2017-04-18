import { Component, OnInit } from '@angular/core';
import { Service503Service } from '../../services/service-503.service';

@Component({
  selector: 'app-comp-503',
  templateUrl: './comp-503.component.html',
  styleUrls: ['./comp-503.component.css']
})
export class Comp503Component implements OnInit {

  constructor(private _service: Service503Service) { }

  ngOnInit() {
  }

}
