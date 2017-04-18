import { Component, OnInit } from '@angular/core';
import { Service229Service } from '../../services/service-229.service';

@Component({
  selector: 'app-comp-229',
  templateUrl: './comp-229.component.html',
  styleUrls: ['./comp-229.component.css']
})
export class Comp229Component implements OnInit {

  constructor(private _service: Service229Service) { }

  ngOnInit() {
  }

}
