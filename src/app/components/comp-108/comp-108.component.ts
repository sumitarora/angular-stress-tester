import { Component, OnInit } from '@angular/core';
import { Service108Service } from '../../services/service-108.service';

@Component({
  selector: 'app-comp-108',
  templateUrl: './comp-108.component.html',
  styleUrls: ['./comp-108.component.css']
})
export class Comp108Component implements OnInit {

  constructor(private _service: Service108Service) { }

  ngOnInit() {
  }

}
