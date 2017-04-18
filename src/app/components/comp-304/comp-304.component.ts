import { Component, OnInit } from '@angular/core';
import { Service304Service } from '../../services/service-304.service';

@Component({
  selector: 'app-comp-304',
  templateUrl: './comp-304.component.html',
  styleUrls: ['./comp-304.component.css']
})
export class Comp304Component implements OnInit {

  constructor(private _service: Service304Service) { }

  ngOnInit() {
  }

}
