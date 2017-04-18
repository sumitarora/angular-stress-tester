import { Component, OnInit } from '@angular/core';
import { Service159Service } from '../../services/service-159.service';

@Component({
  selector: 'app-comp-159',
  templateUrl: './comp-159.component.html',
  styleUrls: ['./comp-159.component.css']
})
export class Comp159Component implements OnInit {

  constructor(private _service: Service159Service) { }

  ngOnInit() {
  }

}
