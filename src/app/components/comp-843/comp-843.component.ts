import { Component, OnInit } from '@angular/core';
import { Service843Service } from '../../services/service-843.service';

@Component({
  selector: 'app-comp-843',
  templateUrl: './comp-843.component.html',
  styleUrls: ['./comp-843.component.css']
})
export class Comp843Component implements OnInit {

  constructor(private _service: Service843Service) { }

  ngOnInit() {
  }

}
