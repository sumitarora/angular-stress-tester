import { Component, OnInit } from '@angular/core';
import { Service550Service } from '../../services/service-550.service';

@Component({
  selector: 'app-comp-550',
  templateUrl: './comp-550.component.html',
  styleUrls: ['./comp-550.component.css']
})
export class Comp550Component implements OnInit {

  constructor(private _service: Service550Service) { }

  ngOnInit() {
  }

}
