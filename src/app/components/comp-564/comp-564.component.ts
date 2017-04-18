import { Component, OnInit } from '@angular/core';
import { Service564Service } from '../../services/service-564.service';

@Component({
  selector: 'app-comp-564',
  templateUrl: './comp-564.component.html',
  styleUrls: ['./comp-564.component.css']
})
export class Comp564Component implements OnInit {

  constructor(private _service: Service564Service) { }

  ngOnInit() {
  }

}
