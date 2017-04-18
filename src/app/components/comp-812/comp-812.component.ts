import { Component, OnInit } from '@angular/core';
import { Service812Service } from '../../services/service-812.service';

@Component({
  selector: 'app-comp-812',
  templateUrl: './comp-812.component.html',
  styleUrls: ['./comp-812.component.css']
})
export class Comp812Component implements OnInit {

  constructor(private _service: Service812Service) { }

  ngOnInit() {
  }

}
