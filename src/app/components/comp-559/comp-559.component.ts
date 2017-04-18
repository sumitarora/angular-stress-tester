import { Component, OnInit } from '@angular/core';
import { Service559Service } from '../../services/service-559.service';

@Component({
  selector: 'app-comp-559',
  templateUrl: './comp-559.component.html',
  styleUrls: ['./comp-559.component.css']
})
export class Comp559Component implements OnInit {

  constructor(private _service: Service559Service) { }

  ngOnInit() {
  }

}
