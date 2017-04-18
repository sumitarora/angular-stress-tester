import { Component, OnInit } from '@angular/core';
import { Service424Service } from '../../services/service-424.service';

@Component({
  selector: 'app-comp-424',
  templateUrl: './comp-424.component.html',
  styleUrls: ['./comp-424.component.css']
})
export class Comp424Component implements OnInit {

  constructor(private _service: Service424Service) { }

  ngOnInit() {
  }

}
