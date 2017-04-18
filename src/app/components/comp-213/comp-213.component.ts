import { Component, OnInit } from '@angular/core';
import { Service213Service } from '../../services/service-213.service';

@Component({
  selector: 'app-comp-213',
  templateUrl: './comp-213.component.html',
  styleUrls: ['./comp-213.component.css']
})
export class Comp213Component implements OnInit {

  constructor(private _service: Service213Service) { }

  ngOnInit() {
  }

}
