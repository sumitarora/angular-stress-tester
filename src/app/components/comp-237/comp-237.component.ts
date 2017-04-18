import { Component, OnInit } from '@angular/core';
import { Service237Service } from '../../services/service-237.service';

@Component({
  selector: 'app-comp-237',
  templateUrl: './comp-237.component.html',
  styleUrls: ['./comp-237.component.css']
})
export class Comp237Component implements OnInit {

  constructor(private _service: Service237Service) { }

  ngOnInit() {
  }

}
