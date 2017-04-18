import { Component, OnInit } from '@angular/core';
import { Service74Service } from '../../services/service-74.service';

@Component({
  selector: 'app-comp-74',
  templateUrl: './comp-74.component.html',
  styleUrls: ['./comp-74.component.css']
})
export class Comp74Component implements OnInit {

  constructor(private _service: Service74Service) { }

  ngOnInit() {
  }

}
