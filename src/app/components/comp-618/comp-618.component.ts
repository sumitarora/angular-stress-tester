import { Component, OnInit } from '@angular/core';
import { Service618Service } from '../../services/service-618.service';

@Component({
  selector: 'app-comp-618',
  templateUrl: './comp-618.component.html',
  styleUrls: ['./comp-618.component.css']
})
export class Comp618Component implements OnInit {

  constructor(private _service: Service618Service) { }

  ngOnInit() {
  }

}
