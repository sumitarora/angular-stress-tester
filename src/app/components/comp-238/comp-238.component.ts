import { Component, OnInit } from '@angular/core';
import { Service238Service } from '../../services/service-238.service';

@Component({
  selector: 'app-comp-238',
  templateUrl: './comp-238.component.html',
  styleUrls: ['./comp-238.component.css']
})
export class Comp238Component implements OnInit {

  constructor(private _service: Service238Service) { }

  ngOnInit() {
  }

}
