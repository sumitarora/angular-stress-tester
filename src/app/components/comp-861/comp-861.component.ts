import { Component, OnInit } from '@angular/core';
import { Service861Service } from '../../services/service-861.service';

@Component({
  selector: 'app-comp-861',
  templateUrl: './comp-861.component.html',
  styleUrls: ['./comp-861.component.css']
})
export class Comp861Component implements OnInit {

  constructor(private _service: Service861Service) { }

  ngOnInit() {
  }

}
