import { Component, OnInit } from '@angular/core';
import { Service989Service } from '../../services/service-989.service';

@Component({
  selector: 'app-comp-989',
  templateUrl: './comp-989.component.html',
  styleUrls: ['./comp-989.component.css']
})
export class Comp989Component implements OnInit {

  constructor(private _service: Service989Service) { }

  ngOnInit() {
  }

}
