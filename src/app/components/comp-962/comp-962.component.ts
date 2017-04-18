import { Component, OnInit } from '@angular/core';
import { Service962Service } from '../../services/service-962.service';

@Component({
  selector: 'app-comp-962',
  templateUrl: './comp-962.component.html',
  styleUrls: ['./comp-962.component.css']
})
export class Comp962Component implements OnInit {

  constructor(private _service: Service962Service) { }

  ngOnInit() {
  }

}
