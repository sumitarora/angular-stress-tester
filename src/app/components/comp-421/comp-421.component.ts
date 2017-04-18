import { Component, OnInit } from '@angular/core';
import { Service421Service } from '../../services/service-421.service';

@Component({
  selector: 'app-comp-421',
  templateUrl: './comp-421.component.html',
  styleUrls: ['./comp-421.component.css']
})
export class Comp421Component implements OnInit {

  constructor(private _service: Service421Service) { }

  ngOnInit() {
  }

}
