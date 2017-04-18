import { Component, OnInit } from '@angular/core';
import { Service717Service } from '../../services/service-717.service';

@Component({
  selector: 'app-comp-717',
  templateUrl: './comp-717.component.html',
  styleUrls: ['./comp-717.component.css']
})
export class Comp717Component implements OnInit {

  constructor(private _service: Service717Service) { }

  ngOnInit() {
  }

}
