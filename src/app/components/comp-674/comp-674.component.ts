import { Component, OnInit } from '@angular/core';
import { Service674Service } from '../../services/service-674.service';

@Component({
  selector: 'app-comp-674',
  templateUrl: './comp-674.component.html',
  styleUrls: ['./comp-674.component.css']
})
export class Comp674Component implements OnInit {

  constructor(private _service: Service674Service) { }

  ngOnInit() {
  }

}
