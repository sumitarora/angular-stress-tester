import { Component, OnInit } from '@angular/core';
import { Service948Service } from '../../services/service-948.service';

@Component({
  selector: 'app-comp-948',
  templateUrl: './comp-948.component.html',
  styleUrls: ['./comp-948.component.css']
})
export class Comp948Component implements OnInit {

  constructor(private _service: Service948Service) { }

  ngOnInit() {
  }

}
