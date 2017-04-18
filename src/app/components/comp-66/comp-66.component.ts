import { Component, OnInit } from '@angular/core';
import { Service66Service } from '../../services/service-66.service';

@Component({
  selector: 'app-comp-66',
  templateUrl: './comp-66.component.html',
  styleUrls: ['./comp-66.component.css']
})
export class Comp66Component implements OnInit {

  constructor(private _service: Service66Service) { }

  ngOnInit() {
  }

}
