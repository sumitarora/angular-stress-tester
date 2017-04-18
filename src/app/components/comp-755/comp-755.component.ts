import { Component, OnInit } from '@angular/core';
import { Service755Service } from '../../services/service-755.service';

@Component({
  selector: 'app-comp-755',
  templateUrl: './comp-755.component.html',
  styleUrls: ['./comp-755.component.css']
})
export class Comp755Component implements OnInit {

  constructor(private _service: Service755Service) { }

  ngOnInit() {
  }

}
