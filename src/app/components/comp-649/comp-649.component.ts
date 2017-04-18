import { Component, OnInit } from '@angular/core';
import { Service649Service } from '../../services/service-649.service';

@Component({
  selector: 'app-comp-649',
  templateUrl: './comp-649.component.html',
  styleUrls: ['./comp-649.component.css']
})
export class Comp649Component implements OnInit {

  constructor(private _service: Service649Service) { }

  ngOnInit() {
  }

}
