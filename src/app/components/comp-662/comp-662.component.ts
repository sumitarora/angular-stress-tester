import { Component, OnInit } from '@angular/core';
import { Service662Service } from '../../services/service-662.service';

@Component({
  selector: 'app-comp-662',
  templateUrl: './comp-662.component.html',
  styleUrls: ['./comp-662.component.css']
})
export class Comp662Component implements OnInit {

  constructor(private _service: Service662Service) { }

  ngOnInit() {
  }

}
