import { Component, OnInit } from '@angular/core';
import { Service289Service } from '../../services/service-289.service';

@Component({
  selector: 'app-comp-289',
  templateUrl: './comp-289.component.html',
  styleUrls: ['./comp-289.component.css']
})
export class Comp289Component implements OnInit {

  constructor(private _service: Service289Service) { }

  ngOnInit() {
  }

}
