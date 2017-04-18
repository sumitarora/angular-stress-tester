import { Component, OnInit } from '@angular/core';
import { Service246Service } from '../../services/service-246.service';

@Component({
  selector: 'app-comp-246',
  templateUrl: './comp-246.component.html',
  styleUrls: ['./comp-246.component.css']
})
export class Comp246Component implements OnInit {

  constructor(private _service: Service246Service) { }

  ngOnInit() {
  }

}
