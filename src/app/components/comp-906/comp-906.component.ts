import { Component, OnInit } from '@angular/core';
import { Service906Service } from '../../services/service-906.service';

@Component({
  selector: 'app-comp-906',
  templateUrl: './comp-906.component.html',
  styleUrls: ['./comp-906.component.css']
})
export class Comp906Component implements OnInit {

  constructor(private _service: Service906Service) { }

  ngOnInit() {
  }

}
