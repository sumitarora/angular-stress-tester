import { Component, OnInit } from '@angular/core';
import { Service865Service } from '../../services/service-865.service';

@Component({
  selector: 'app-comp-865',
  templateUrl: './comp-865.component.html',
  styleUrls: ['./comp-865.component.css']
})
export class Comp865Component implements OnInit {

  constructor(private _service: Service865Service) { }

  ngOnInit() {
  }

}
