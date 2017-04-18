import { Component, OnInit } from '@angular/core';
import { Service455Service } from '../../services/service-455.service';

@Component({
  selector: 'app-comp-455',
  templateUrl: './comp-455.component.html',
  styleUrls: ['./comp-455.component.css']
})
export class Comp455Component implements OnInit {

  constructor(private _service: Service455Service) { }

  ngOnInit() {
  }

}
