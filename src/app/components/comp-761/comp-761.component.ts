import { Component, OnInit } from '@angular/core';
import { Service761Service } from '../../services/service-761.service';

@Component({
  selector: 'app-comp-761',
  templateUrl: './comp-761.component.html',
  styleUrls: ['./comp-761.component.css']
})
export class Comp761Component implements OnInit {

  constructor(private _service: Service761Service) { }

  ngOnInit() {
  }

}
