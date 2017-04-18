import { Component, OnInit } from '@angular/core';
import { Service972Service } from '../../services/service-972.service';

@Component({
  selector: 'app-comp-972',
  templateUrl: './comp-972.component.html',
  styleUrls: ['./comp-972.component.css']
})
export class Comp972Component implements OnInit {

  constructor(private _service: Service972Service) { }

  ngOnInit() {
  }

}
