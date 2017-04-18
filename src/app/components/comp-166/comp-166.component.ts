import { Component, OnInit } from '@angular/core';
import { Service166Service } from '../../services/service-166.service';

@Component({
  selector: 'app-comp-166',
  templateUrl: './comp-166.component.html',
  styleUrls: ['./comp-166.component.css']
})
export class Comp166Component implements OnInit {

  constructor(private _service: Service166Service) { }

  ngOnInit() {
  }

}
