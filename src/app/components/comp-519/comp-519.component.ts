import { Component, OnInit } from '@angular/core';
import { Service519Service } from '../../services/service-519.service';

@Component({
  selector: 'app-comp-519',
  templateUrl: './comp-519.component.html',
  styleUrls: ['./comp-519.component.css']
})
export class Comp519Component implements OnInit {

  constructor(private _service: Service519Service) { }

  ngOnInit() {
  }

}
