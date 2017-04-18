import { Component, OnInit } from '@angular/core';
import { Service103Service } from '../../services/service-103.service';

@Component({
  selector: 'app-comp-103',
  templateUrl: './comp-103.component.html',
  styleUrls: ['./comp-103.component.css']
})
export class Comp103Component implements OnInit {

  constructor(private _service: Service103Service) { }

  ngOnInit() {
  }

}
