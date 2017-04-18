import { Component, OnInit } from '@angular/core';
import { Service895Service } from '../../services/service-895.service';

@Component({
  selector: 'app-comp-895',
  templateUrl: './comp-895.component.html',
  styleUrls: ['./comp-895.component.css']
})
export class Comp895Component implements OnInit {

  constructor(private _service: Service895Service) { }

  ngOnInit() {
  }

}
