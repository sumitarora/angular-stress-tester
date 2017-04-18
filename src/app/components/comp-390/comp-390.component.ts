import { Component, OnInit } from '@angular/core';
import { Service390Service } from '../../services/service-390.service';

@Component({
  selector: 'app-comp-390',
  templateUrl: './comp-390.component.html',
  styleUrls: ['./comp-390.component.css']
})
export class Comp390Component implements OnInit {

  constructor(private _service: Service390Service) { }

  ngOnInit() {
  }

}
