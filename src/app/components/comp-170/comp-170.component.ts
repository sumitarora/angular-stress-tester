import { Component, OnInit } from '@angular/core';
import { Service170Service } from '../../services/service-170.service';

@Component({
  selector: 'app-comp-170',
  templateUrl: './comp-170.component.html',
  styleUrls: ['./comp-170.component.css']
})
export class Comp170Component implements OnInit {

  constructor(private _service: Service170Service) { }

  ngOnInit() {
  }

}
