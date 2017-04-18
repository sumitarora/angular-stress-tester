import { Component, OnInit } from '@angular/core';
import { Service416Service } from '../../services/service-416.service';

@Component({
  selector: 'app-comp-416',
  templateUrl: './comp-416.component.html',
  styleUrls: ['./comp-416.component.css']
})
export class Comp416Component implements OnInit {

  constructor(private _service: Service416Service) { }

  ngOnInit() {
  }

}
