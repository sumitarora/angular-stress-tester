import { Component, OnInit } from '@angular/core';
import { Service905Service } from '../../services/service-905.service';

@Component({
  selector: 'app-comp-905',
  templateUrl: './comp-905.component.html',
  styleUrls: ['./comp-905.component.css']
})
export class Comp905Component implements OnInit {

  constructor(private _service: Service905Service) { }

  ngOnInit() {
  }

}
