import { Component, OnInit } from '@angular/core';
import { Service265Service } from '../../services/service-265.service';

@Component({
  selector: 'app-comp-265',
  templateUrl: './comp-265.component.html',
  styleUrls: ['./comp-265.component.css']
})
export class Comp265Component implements OnInit {

  constructor(private _service: Service265Service) { }

  ngOnInit() {
  }

}
