import { Component, OnInit } from '@angular/core';
import { Service921Service } from '../../services/service-921.service';

@Component({
  selector: 'app-comp-921',
  templateUrl: './comp-921.component.html',
  styleUrls: ['./comp-921.component.css']
})
export class Comp921Component implements OnInit {

  constructor(private _service: Service921Service) { }

  ngOnInit() {
  }

}
