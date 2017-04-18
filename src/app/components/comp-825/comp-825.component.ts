import { Component, OnInit } from '@angular/core';
import { Service825Service } from '../../services/service-825.service';

@Component({
  selector: 'app-comp-825',
  templateUrl: './comp-825.component.html',
  styleUrls: ['./comp-825.component.css']
})
export class Comp825Component implements OnInit {

  constructor(private _service: Service825Service) { }

  ngOnInit() {
  }

}
