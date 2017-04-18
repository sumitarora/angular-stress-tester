import { Component, OnInit } from '@angular/core';
import { Service966Service } from '../../services/service-966.service';

@Component({
  selector: 'app-comp-966',
  templateUrl: './comp-966.component.html',
  styleUrls: ['./comp-966.component.css']
})
export class Comp966Component implements OnInit {

  constructor(private _service: Service966Service) { }

  ngOnInit() {
  }

}
