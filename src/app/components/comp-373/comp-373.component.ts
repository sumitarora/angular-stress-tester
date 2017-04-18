import { Component, OnInit } from '@angular/core';
import { Service373Service } from '../../services/service-373.service';

@Component({
  selector: 'app-comp-373',
  templateUrl: './comp-373.component.html',
  styleUrls: ['./comp-373.component.css']
})
export class Comp373Component implements OnInit {

  constructor(private _service: Service373Service) { }

  ngOnInit() {
  }

}
