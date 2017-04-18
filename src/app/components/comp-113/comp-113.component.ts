import { Component, OnInit } from '@angular/core';
import { Service113Service } from '../../services/service-113.service';

@Component({
  selector: 'app-comp-113',
  templateUrl: './comp-113.component.html',
  styleUrls: ['./comp-113.component.css']
})
export class Comp113Component implements OnInit {

  constructor(private _service: Service113Service) { }

  ngOnInit() {
  }

}
