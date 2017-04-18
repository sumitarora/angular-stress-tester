import { Component, OnInit } from '@angular/core';
import { Service643Service } from '../../services/service-643.service';

@Component({
  selector: 'app-comp-643',
  templateUrl: './comp-643.component.html',
  styleUrls: ['./comp-643.component.css']
})
export class Comp643Component implements OnInit {

  constructor(private _service: Service643Service) { }

  ngOnInit() {
  }

}
