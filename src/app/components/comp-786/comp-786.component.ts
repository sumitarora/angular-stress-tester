import { Component, OnInit } from '@angular/core';
import { Service786Service } from '../../services/service-786.service';

@Component({
  selector: 'app-comp-786',
  templateUrl: './comp-786.component.html',
  styleUrls: ['./comp-786.component.css']
})
export class Comp786Component implements OnInit {

  constructor(private _service: Service786Service) { }

  ngOnInit() {
  }

}
