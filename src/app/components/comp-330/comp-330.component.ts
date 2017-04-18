import { Component, OnInit } from '@angular/core';
import { Service330Service } from '../../services/service-330.service';

@Component({
  selector: 'app-comp-330',
  templateUrl: './comp-330.component.html',
  styleUrls: ['./comp-330.component.css']
})
export class Comp330Component implements OnInit {

  constructor(private _service: Service330Service) { }

  ngOnInit() {
  }

}
