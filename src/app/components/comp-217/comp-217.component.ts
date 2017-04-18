import { Component, OnInit } from '@angular/core';
import { Service217Service } from '../../services/service-217.service';

@Component({
  selector: 'app-comp-217',
  templateUrl: './comp-217.component.html',
  styleUrls: ['./comp-217.component.css']
})
export class Comp217Component implements OnInit {

  constructor(private _service: Service217Service) { }

  ngOnInit() {
  }

}
