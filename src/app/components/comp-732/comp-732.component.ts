import { Component, OnInit } from '@angular/core';
import { Service732Service } from '../../services/service-732.service';

@Component({
  selector: 'app-comp-732',
  templateUrl: './comp-732.component.html',
  styleUrls: ['./comp-732.component.css']
})
export class Comp732Component implements OnInit {

  constructor(private _service: Service732Service) { }

  ngOnInit() {
  }

}
