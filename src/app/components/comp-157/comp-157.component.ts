import { Component, OnInit } from '@angular/core';
import { Service157Service } from '../../services/service-157.service';

@Component({
  selector: 'app-comp-157',
  templateUrl: './comp-157.component.html',
  styleUrls: ['./comp-157.component.css']
})
export class Comp157Component implements OnInit {

  constructor(private _service: Service157Service) { }

  ngOnInit() {
  }

}
