import { Component, OnInit } from '@angular/core';
import { Service104Service } from '../../services/service-104.service';

@Component({
  selector: 'app-comp-104',
  templateUrl: './comp-104.component.html',
  styleUrls: ['./comp-104.component.css']
})
export class Comp104Component implements OnInit {

  constructor(private _service: Service104Service) { }

  ngOnInit() {
  }

}
