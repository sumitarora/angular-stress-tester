import { Component, OnInit } from '@angular/core';
import { Service615Service } from '../../services/service-615.service';

@Component({
  selector: 'app-comp-615',
  templateUrl: './comp-615.component.html',
  styleUrls: ['./comp-615.component.css']
})
export class Comp615Component implements OnInit {

  constructor(private _service: Service615Service) { }

  ngOnInit() {
  }

}
