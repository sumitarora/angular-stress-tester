import { Component, OnInit } from '@angular/core';
import { Service152Service } from '../../services/service-152.service';

@Component({
  selector: 'app-comp-152',
  templateUrl: './comp-152.component.html',
  styleUrls: ['./comp-152.component.css']
})
export class Comp152Component implements OnInit {

  constructor(private _service: Service152Service) { }

  ngOnInit() {
  }

}
