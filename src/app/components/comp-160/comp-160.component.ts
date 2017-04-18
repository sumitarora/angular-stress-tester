import { Component, OnInit } from '@angular/core';
import { Service160Service } from '../../services/service-160.service';

@Component({
  selector: 'app-comp-160',
  templateUrl: './comp-160.component.html',
  styleUrls: ['./comp-160.component.css']
})
export class Comp160Component implements OnInit {

  constructor(private _service: Service160Service) { }

  ngOnInit() {
  }

}
