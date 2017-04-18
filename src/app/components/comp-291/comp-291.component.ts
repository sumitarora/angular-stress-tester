import { Component, OnInit } from '@angular/core';
import { Service291Service } from '../../services/service-291.service';

@Component({
  selector: 'app-comp-291',
  templateUrl: './comp-291.component.html',
  styleUrls: ['./comp-291.component.css']
})
export class Comp291Component implements OnInit {

  constructor(private _service: Service291Service) { }

  ngOnInit() {
  }

}
