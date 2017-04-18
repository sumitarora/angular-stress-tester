import { Component, OnInit } from '@angular/core';
import { Service612Service } from '../../services/service-612.service';

@Component({
  selector: 'app-comp-612',
  templateUrl: './comp-612.component.html',
  styleUrls: ['./comp-612.component.css']
})
export class Comp612Component implements OnInit {

  constructor(private _service: Service612Service) { }

  ngOnInit() {
  }

}
