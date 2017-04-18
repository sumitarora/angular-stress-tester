import { Component, OnInit } from '@angular/core';
import { Service749Service } from '../../services/service-749.service';

@Component({
  selector: 'app-comp-749',
  templateUrl: './comp-749.component.html',
  styleUrls: ['./comp-749.component.css']
})
export class Comp749Component implements OnInit {

  constructor(private _service: Service749Service) { }

  ngOnInit() {
  }

}
