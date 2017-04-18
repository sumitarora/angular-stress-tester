import { Component, OnInit } from '@angular/core';
import { Service16Service } from '../../services/service-16.service';

@Component({
  selector: 'app-comp-16',
  templateUrl: './comp-16.component.html',
  styleUrls: ['./comp-16.component.css']
})
export class Comp16Component implements OnInit {

  constructor(private _service: Service16Service) { }

  ngOnInit() {
  }

}
