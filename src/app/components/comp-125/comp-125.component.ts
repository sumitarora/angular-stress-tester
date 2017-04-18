import { Component, OnInit } from '@angular/core';
import { Service125Service } from '../../services/service-125.service';

@Component({
  selector: 'app-comp-125',
  templateUrl: './comp-125.component.html',
  styleUrls: ['./comp-125.component.css']
})
export class Comp125Component implements OnInit {

  constructor(private _service: Service125Service) { }

  ngOnInit() {
  }

}
