import { Component, OnInit } from '@angular/core';
import { Service1000Service } from '../../services/service-1000.service';

@Component({
  selector: 'app-comp-1000',
  templateUrl: './comp-1000.component.html',
  styleUrls: ['./comp-1000.component.css']
})
export class Comp1000Component implements OnInit {

  constructor(private _service: Service1000Service) { }

  ngOnInit() {
  }

}
