import { Component, OnInit } from '@angular/core';
import { Service764Service } from '../../services/service-764.service';

@Component({
  selector: 'app-comp-764',
  templateUrl: './comp-764.component.html',
  styleUrls: ['./comp-764.component.css']
})
export class Comp764Component implements OnInit {

  constructor(private _service: Service764Service) { }

  ngOnInit() {
  }

}
