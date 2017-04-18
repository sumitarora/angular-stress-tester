import { Component, OnInit } from '@angular/core';
import { Service720Service } from '../../services/service-720.service';

@Component({
  selector: 'app-comp-720',
  templateUrl: './comp-720.component.html',
  styleUrls: ['./comp-720.component.css']
})
export class Comp720Component implements OnInit {

  constructor(private _service: Service720Service) { }

  ngOnInit() {
  }

}
