import { Component, OnInit } from '@angular/core';
import { Service400Service } from '../../services/service-400.service';

@Component({
  selector: 'app-comp-400',
  templateUrl: './comp-400.component.html',
  styleUrls: ['./comp-400.component.css']
})
export class Comp400Component implements OnInit {

  constructor(private _service: Service400Service) { }

  ngOnInit() {
  }

}
