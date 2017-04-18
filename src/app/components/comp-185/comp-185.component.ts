import { Component, OnInit } from '@angular/core';
import { Service185Service } from '../../services/service-185.service';

@Component({
  selector: 'app-comp-185',
  templateUrl: './comp-185.component.html',
  styleUrls: ['./comp-185.component.css']
})
export class Comp185Component implements OnInit {

  constructor(private _service: Service185Service) { }

  ngOnInit() {
  }

}
