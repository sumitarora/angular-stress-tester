import { Component, OnInit } from '@angular/core';
import { Service202Service } from '../../services/service-202.service';

@Component({
  selector: 'app-comp-202',
  templateUrl: './comp-202.component.html',
  styleUrls: ['./comp-202.component.css']
})
export class Comp202Component implements OnInit {

  constructor(private _service: Service202Service) { }

  ngOnInit() {
  }

}
