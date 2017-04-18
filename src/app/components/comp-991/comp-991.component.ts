import { Component, OnInit } from '@angular/core';
import { Service991Service } from '../../services/service-991.service';

@Component({
  selector: 'app-comp-991',
  templateUrl: './comp-991.component.html',
  styleUrls: ['./comp-991.component.css']
})
export class Comp991Component implements OnInit {

  constructor(private _service: Service991Service) { }

  ngOnInit() {
  }

}
