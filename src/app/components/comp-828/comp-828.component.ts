import { Component, OnInit } from '@angular/core';
import { Service828Service } from '../../services/service-828.service';

@Component({
  selector: 'app-comp-828',
  templateUrl: './comp-828.component.html',
  styleUrls: ['./comp-828.component.css']
})
export class Comp828Component implements OnInit {

  constructor(private _service: Service828Service) { }

  ngOnInit() {
  }

}
