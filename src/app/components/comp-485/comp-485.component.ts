import { Component, OnInit } from '@angular/core';
import { Service485Service } from '../../services/service-485.service';

@Component({
  selector: 'app-comp-485',
  templateUrl: './comp-485.component.html',
  styleUrls: ['./comp-485.component.css']
})
export class Comp485Component implements OnInit {

  constructor(private _service: Service485Service) { }

  ngOnInit() {
  }

}
