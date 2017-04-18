import { Component, OnInit } from '@angular/core';
import { Service68Service } from '../../services/service-68.service';

@Component({
  selector: 'app-comp-68',
  templateUrl: './comp-68.component.html',
  styleUrls: ['./comp-68.component.css']
})
export class Comp68Component implements OnInit {

  constructor(private _service: Service68Service) { }

  ngOnInit() {
  }

}
