import { Component, OnInit } from '@angular/core';
import { Service656Service } from '../../services/service-656.service';

@Component({
  selector: 'app-comp-656',
  templateUrl: './comp-656.component.html',
  styleUrls: ['./comp-656.component.css']
})
export class Comp656Component implements OnInit {

  constructor(private _service: Service656Service) { }

  ngOnInit() {
  }

}
