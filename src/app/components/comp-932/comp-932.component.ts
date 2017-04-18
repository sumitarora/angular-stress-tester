import { Component, OnInit } from '@angular/core';
import { Service932Service } from '../../services/service-932.service';

@Component({
  selector: 'app-comp-932',
  templateUrl: './comp-932.component.html',
  styleUrls: ['./comp-932.component.css']
})
export class Comp932Component implements OnInit {

  constructor(private _service: Service932Service) { }

  ngOnInit() {
  }

}
