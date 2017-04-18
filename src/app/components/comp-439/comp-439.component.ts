import { Component, OnInit } from '@angular/core';
import { Service439Service } from '../../services/service-439.service';

@Component({
  selector: 'app-comp-439',
  templateUrl: './comp-439.component.html',
  styleUrls: ['./comp-439.component.css']
})
export class Comp439Component implements OnInit {

  constructor(private _service: Service439Service) { }

  ngOnInit() {
  }

}
