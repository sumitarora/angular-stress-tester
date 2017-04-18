import { Component, OnInit } from '@angular/core';
import { Service297Service } from '../../services/service-297.service';

@Component({
  selector: 'app-comp-297',
  templateUrl: './comp-297.component.html',
  styleUrls: ['./comp-297.component.css']
})
export class Comp297Component implements OnInit {

  constructor(private _service: Service297Service) { }

  ngOnInit() {
  }

}
