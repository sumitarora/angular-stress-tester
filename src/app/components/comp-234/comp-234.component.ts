import { Component, OnInit } from '@angular/core';
import { Service234Service } from '../../services/service-234.service';

@Component({
  selector: 'app-comp-234',
  templateUrl: './comp-234.component.html',
  styleUrls: ['./comp-234.component.css']
})
export class Comp234Component implements OnInit {

  constructor(private _service: Service234Service) { }

  ngOnInit() {
  }

}
