import { Component, OnInit } from '@angular/core';
import { Service725Service } from '../../services/service-725.service';

@Component({
  selector: 'app-comp-725',
  templateUrl: './comp-725.component.html',
  styleUrls: ['./comp-725.component.css']
})
export class Comp725Component implements OnInit {

  constructor(private _service: Service725Service) { }

  ngOnInit() {
  }

}
