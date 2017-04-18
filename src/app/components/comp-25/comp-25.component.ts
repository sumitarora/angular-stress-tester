import { Component, OnInit } from '@angular/core';
import { Service25Service } from '../../services/service-25.service';

@Component({
  selector: 'app-comp-25',
  templateUrl: './comp-25.component.html',
  styleUrls: ['./comp-25.component.css']
})
export class Comp25Component implements OnInit {

  constructor(private _service: Service25Service) { }

  ngOnInit() {
  }

}
