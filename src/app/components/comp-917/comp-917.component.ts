import { Component, OnInit } from '@angular/core';
import { Service917Service } from '../../services/service-917.service';

@Component({
  selector: 'app-comp-917',
  templateUrl: './comp-917.component.html',
  styleUrls: ['./comp-917.component.css']
})
export class Comp917Component implements OnInit {

  constructor(private _service: Service917Service) { }

  ngOnInit() {
  }

}
