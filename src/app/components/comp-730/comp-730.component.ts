import { Component, OnInit } from '@angular/core';
import { Service730Service } from '../../services/service-730.service';

@Component({
  selector: 'app-comp-730',
  templateUrl: './comp-730.component.html',
  styleUrls: ['./comp-730.component.css']
})
export class Comp730Component implements OnInit {

  constructor(private _service: Service730Service) { }

  ngOnInit() {
  }

}
