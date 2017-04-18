import { Component, OnInit } from '@angular/core';
import { Service546Service } from '../../services/service-546.service';

@Component({
  selector: 'app-comp-546',
  templateUrl: './comp-546.component.html',
  styleUrls: ['./comp-546.component.css']
})
export class Comp546Component implements OnInit {

  constructor(private _service: Service546Service) { }

  ngOnInit() {
  }

}
