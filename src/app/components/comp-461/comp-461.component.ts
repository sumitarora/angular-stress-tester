import { Component, OnInit } from '@angular/core';
import { Service461Service } from '../../services/service-461.service';

@Component({
  selector: 'app-comp-461',
  templateUrl: './comp-461.component.html',
  styleUrls: ['./comp-461.component.css']
})
export class Comp461Component implements OnInit {

  constructor(private _service: Service461Service) { }

  ngOnInit() {
  }

}
