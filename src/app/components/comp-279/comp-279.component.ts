import { Component, OnInit } from '@angular/core';
import { Service279Service } from '../../services/service-279.service';

@Component({
  selector: 'app-comp-279',
  templateUrl: './comp-279.component.html',
  styleUrls: ['./comp-279.component.css']
})
export class Comp279Component implements OnInit {

  constructor(private _service: Service279Service) { }

  ngOnInit() {
  }

}
