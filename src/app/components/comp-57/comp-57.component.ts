import { Component, OnInit } from '@angular/core';
import { Service57Service } from '../../services/service-57.service';

@Component({
  selector: 'app-comp-57',
  templateUrl: './comp-57.component.html',
  styleUrls: ['./comp-57.component.css']
})
export class Comp57Component implements OnInit {

  constructor(private _service: Service57Service) { }

  ngOnInit() {
  }

}
