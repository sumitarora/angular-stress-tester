import { Component, OnInit } from '@angular/core';
import { Service493Service } from '../../services/service-493.service';

@Component({
  selector: 'app-comp-493',
  templateUrl: './comp-493.component.html',
  styleUrls: ['./comp-493.component.css']
})
export class Comp493Component implements OnInit {

  constructor(private _service: Service493Service) { }

  ngOnInit() {
  }

}
