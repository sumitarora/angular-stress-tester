import { Component, OnInit } from '@angular/core';
import { Service619Service } from '../../services/service-619.service';

@Component({
  selector: 'app-comp-619',
  templateUrl: './comp-619.component.html',
  styleUrls: ['./comp-619.component.css']
})
export class Comp619Component implements OnInit {

  constructor(private _service: Service619Service) { }

  ngOnInit() {
  }

}
