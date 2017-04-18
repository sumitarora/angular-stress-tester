import { Component, OnInit } from '@angular/core';
import { Service757Service } from '../../services/service-757.service';

@Component({
  selector: 'app-comp-757',
  templateUrl: './comp-757.component.html',
  styleUrls: ['./comp-757.component.css']
})
export class Comp757Component implements OnInit {

  constructor(private _service: Service757Service) { }

  ngOnInit() {
  }

}
