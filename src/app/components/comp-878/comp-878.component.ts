import { Component, OnInit } from '@angular/core';
import { Service878Service } from '../../services/service-878.service';

@Component({
  selector: 'app-comp-878',
  templateUrl: './comp-878.component.html',
  styleUrls: ['./comp-878.component.css']
})
export class Comp878Component implements OnInit {

  constructor(private _service: Service878Service) { }

  ngOnInit() {
  }

}
