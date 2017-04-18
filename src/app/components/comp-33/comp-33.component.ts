import { Component, OnInit } from '@angular/core';
import { Service33Service } from '../../services/service-33.service';

@Component({
  selector: 'app-comp-33',
  templateUrl: './comp-33.component.html',
  styleUrls: ['./comp-33.component.css']
})
export class Comp33Component implements OnInit {

  constructor(private _service: Service33Service) { }

  ngOnInit() {
  }

}
