import { Component, OnInit } from '@angular/core';
import { Service587Service } from '../../services/service-587.service';

@Component({
  selector: 'app-comp-587',
  templateUrl: './comp-587.component.html',
  styleUrls: ['./comp-587.component.css']
})
export class Comp587Component implements OnInit {

  constructor(private _service: Service587Service) { }

  ngOnInit() {
  }

}
