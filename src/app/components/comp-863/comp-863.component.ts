import { Component, OnInit } from '@angular/core';
import { Service863Service } from '../../services/service-863.service';

@Component({
  selector: 'app-comp-863',
  templateUrl: './comp-863.component.html',
  styleUrls: ['./comp-863.component.css']
})
export class Comp863Component implements OnInit {

  constructor(private _service: Service863Service) { }

  ngOnInit() {
  }

}
