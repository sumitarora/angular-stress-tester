import { Component, OnInit } from '@angular/core';
import { Service593Service } from '../../services/service-593.service';

@Component({
  selector: 'app-comp-593',
  templateUrl: './comp-593.component.html',
  styleUrls: ['./comp-593.component.css']
})
export class Comp593Component implements OnInit {

  constructor(private _service: Service593Service) { }

  ngOnInit() {
  }

}
