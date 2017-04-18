import { Component, OnInit } from '@angular/core';
import { Service318Service } from '../../services/service-318.service';

@Component({
  selector: 'app-comp-318',
  templateUrl: './comp-318.component.html',
  styleUrls: ['./comp-318.component.css']
})
export class Comp318Component implements OnInit {

  constructor(private _service: Service318Service) { }

  ngOnInit() {
  }

}
