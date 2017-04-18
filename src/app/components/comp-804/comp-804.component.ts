import { Component, OnInit } from '@angular/core';
import { Service804Service } from '../../services/service-804.service';

@Component({
  selector: 'app-comp-804',
  templateUrl: './comp-804.component.html',
  styleUrls: ['./comp-804.component.css']
})
export class Comp804Component implements OnInit {

  constructor(private _service: Service804Service) { }

  ngOnInit() {
  }

}
