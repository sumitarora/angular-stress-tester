import { Component, OnInit } from '@angular/core';
import { Service27Service } from '../../services/service-27.service';

@Component({
  selector: 'app-comp-27',
  templateUrl: './comp-27.component.html',
  styleUrls: ['./comp-27.component.css']
})
export class Comp27Component implements OnInit {

  constructor(private _service: Service27Service) { }

  ngOnInit() {
  }

}
