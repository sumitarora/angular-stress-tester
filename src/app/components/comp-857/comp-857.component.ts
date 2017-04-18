import { Component, OnInit } from '@angular/core';
import { Service857Service } from '../../services/service-857.service';

@Component({
  selector: 'app-comp-857',
  templateUrl: './comp-857.component.html',
  styleUrls: ['./comp-857.component.css']
})
export class Comp857Component implements OnInit {

  constructor(private _service: Service857Service) { }

  ngOnInit() {
  }

}
