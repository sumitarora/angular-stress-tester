import { Component, OnInit } from '@angular/core';
import { Service178Service } from '../../services/service-178.service';

@Component({
  selector: 'app-comp-178',
  templateUrl: './comp-178.component.html',
  styleUrls: ['./comp-178.component.css']
})
export class Comp178Component implements OnInit {

  constructor(private _service: Service178Service) { }

  ngOnInit() {
  }

}
