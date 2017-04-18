import { Component, OnInit } from '@angular/core';
import { Service362Service } from '../../services/service-362.service';

@Component({
  selector: 'app-comp-362',
  templateUrl: './comp-362.component.html',
  styleUrls: ['./comp-362.component.css']
})
export class Comp362Component implements OnInit {

  constructor(private _service: Service362Service) { }

  ngOnInit() {
  }

}
