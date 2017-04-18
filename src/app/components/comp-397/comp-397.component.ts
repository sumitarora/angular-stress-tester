import { Component, OnInit } from '@angular/core';
import { Service397Service } from '../../services/service-397.service';

@Component({
  selector: 'app-comp-397',
  templateUrl: './comp-397.component.html',
  styleUrls: ['./comp-397.component.css']
})
export class Comp397Component implements OnInit {

  constructor(private _service: Service397Service) { }

  ngOnInit() {
  }

}
