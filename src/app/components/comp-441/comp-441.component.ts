import { Component, OnInit } from '@angular/core';
import { Service441Service } from '../../services/service-441.service';

@Component({
  selector: 'app-comp-441',
  templateUrl: './comp-441.component.html',
  styleUrls: ['./comp-441.component.css']
})
export class Comp441Component implements OnInit {

  constructor(private _service: Service441Service) { }

  ngOnInit() {
  }

}
