import { Component, OnInit } from '@angular/core';
import { Service38Service } from '../../services/service-38.service';

@Component({
  selector: 'app-comp-38',
  templateUrl: './comp-38.component.html',
  styleUrls: ['./comp-38.component.css']
})
export class Comp38Component implements OnInit {

  constructor(private _service: Service38Service) { }

  ngOnInit() {
  }

}
