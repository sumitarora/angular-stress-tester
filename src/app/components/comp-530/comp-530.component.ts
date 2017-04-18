import { Component, OnInit } from '@angular/core';
import { Service530Service } from '../../services/service-530.service';

@Component({
  selector: 'app-comp-530',
  templateUrl: './comp-530.component.html',
  styleUrls: ['./comp-530.component.css']
})
export class Comp530Component implements OnInit {

  constructor(private _service: Service530Service) { }

  ngOnInit() {
  }

}
