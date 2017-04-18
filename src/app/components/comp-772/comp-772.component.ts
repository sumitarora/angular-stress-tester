import { Component, OnInit } from '@angular/core';
import { Service772Service } from '../../services/service-772.service';

@Component({
  selector: 'app-comp-772',
  templateUrl: './comp-772.component.html',
  styleUrls: ['./comp-772.component.css']
})
export class Comp772Component implements OnInit {

  constructor(private _service: Service772Service) { }

  ngOnInit() {
  }

}
