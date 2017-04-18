import { Component, OnInit } from '@angular/core';
import { Service977Service } from '../../services/service-977.service';

@Component({
  selector: 'app-comp-977',
  templateUrl: './comp-977.component.html',
  styleUrls: ['./comp-977.component.css']
})
export class Comp977Component implements OnInit {

  constructor(private _service: Service977Service) { }

  ngOnInit() {
  }

}
