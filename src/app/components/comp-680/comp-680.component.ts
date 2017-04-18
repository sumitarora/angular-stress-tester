import { Component, OnInit } from '@angular/core';
import { Service680Service } from '../../services/service-680.service';

@Component({
  selector: 'app-comp-680',
  templateUrl: './comp-680.component.html',
  styleUrls: ['./comp-680.component.css']
})
export class Comp680Component implements OnInit {

  constructor(private _service: Service680Service) { }

  ngOnInit() {
  }

}
