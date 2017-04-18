import { Component, OnInit } from '@angular/core';
import { Service71Service } from '../../services/service-71.service';

@Component({
  selector: 'app-comp-71',
  templateUrl: './comp-71.component.html',
  styleUrls: ['./comp-71.component.css']
})
export class Comp71Component implements OnInit {

  constructor(private _service: Service71Service) { }

  ngOnInit() {
  }

}
