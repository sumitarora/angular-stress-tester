import { Component, OnInit } from '@angular/core';
import { Service339Service } from '../../services/service-339.service';

@Component({
  selector: 'app-comp-339',
  templateUrl: './comp-339.component.html',
  styleUrls: ['./comp-339.component.css']
})
export class Comp339Component implements OnInit {

  constructor(private _service: Service339Service) { }

  ngOnInit() {
  }

}
