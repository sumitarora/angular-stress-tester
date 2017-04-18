import { Component, OnInit } from '@angular/core';
import { Service748Service } from '../../services/service-748.service';

@Component({
  selector: 'app-comp-748',
  templateUrl: './comp-748.component.html',
  styleUrls: ['./comp-748.component.css']
})
export class Comp748Component implements OnInit {

  constructor(private _service: Service748Service) { }

  ngOnInit() {
  }

}
