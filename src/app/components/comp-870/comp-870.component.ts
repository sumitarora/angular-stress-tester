import { Component, OnInit } from '@angular/core';
import { Service870Service } from '../../services/service-870.service';

@Component({
  selector: 'app-comp-870',
  templateUrl: './comp-870.component.html',
  styleUrls: ['./comp-870.component.css']
})
export class Comp870Component implements OnInit {

  constructor(private _service: Service870Service) { }

  ngOnInit() {
  }

}
