import { Component, OnInit } from '@angular/core';
import { Service107Service } from '../../services/service-107.service';

@Component({
  selector: 'app-comp-107',
  templateUrl: './comp-107.component.html',
  styleUrls: ['./comp-107.component.css']
})
export class Comp107Component implements OnInit {

  constructor(private _service: Service107Service) { }

  ngOnInit() {
  }

}
