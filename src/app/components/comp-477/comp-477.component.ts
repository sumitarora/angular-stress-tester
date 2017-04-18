import { Component, OnInit } from '@angular/core';
import { Service477Service } from '../../services/service-477.service';

@Component({
  selector: 'app-comp-477',
  templateUrl: './comp-477.component.html',
  styleUrls: ['./comp-477.component.css']
})
export class Comp477Component implements OnInit {

  constructor(private _service: Service477Service) { }

  ngOnInit() {
  }

}
