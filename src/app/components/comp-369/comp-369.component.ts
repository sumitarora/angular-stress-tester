import { Component, OnInit } from '@angular/core';
import { Service369Service } from '../../services/service-369.service';

@Component({
  selector: 'app-comp-369',
  templateUrl: './comp-369.component.html',
  styleUrls: ['./comp-369.component.css']
})
export class Comp369Component implements OnInit {

  constructor(private _service: Service369Service) { }

  ngOnInit() {
  }

}
