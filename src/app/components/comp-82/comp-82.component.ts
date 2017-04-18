import { Component, OnInit } from '@angular/core';
import { Service82Service } from '../../services/service-82.service';

@Component({
  selector: 'app-comp-82',
  templateUrl: './comp-82.component.html',
  styleUrls: ['./comp-82.component.css']
})
export class Comp82Component implements OnInit {

  constructor(private _service: Service82Service) { }

  ngOnInit() {
  }

}
