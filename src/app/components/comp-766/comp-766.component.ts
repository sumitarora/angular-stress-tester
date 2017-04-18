import { Component, OnInit } from '@angular/core';
import { Service766Service } from '../../services/service-766.service';

@Component({
  selector: 'app-comp-766',
  templateUrl: './comp-766.component.html',
  styleUrls: ['./comp-766.component.css']
})
export class Comp766Component implements OnInit {

  constructor(private _service: Service766Service) { }

  ngOnInit() {
  }

}
