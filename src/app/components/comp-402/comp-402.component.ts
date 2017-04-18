import { Component, OnInit } from '@angular/core';
import { Service402Service } from '../../services/service-402.service';

@Component({
  selector: 'app-comp-402',
  templateUrl: './comp-402.component.html',
  styleUrls: ['./comp-402.component.css']
})
export class Comp402Component implements OnInit {

  constructor(private _service: Service402Service) { }

  ngOnInit() {
  }

}
