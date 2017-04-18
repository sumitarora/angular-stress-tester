import { Component, OnInit } from '@angular/core';
import { Service434Service } from '../../services/service-434.service';

@Component({
  selector: 'app-comp-434',
  templateUrl: './comp-434.component.html',
  styleUrls: ['./comp-434.component.css']
})
export class Comp434Component implements OnInit {

  constructor(private _service: Service434Service) { }

  ngOnInit() {
  }

}
