import { Component, OnInit } from '@angular/core';
import { Service542Service } from '../../services/service-542.service';

@Component({
  selector: 'app-comp-542',
  templateUrl: './comp-542.component.html',
  styleUrls: ['./comp-542.component.css']
})
export class Comp542Component implements OnInit {

  constructor(private _service: Service542Service) { }

  ngOnInit() {
  }

}
