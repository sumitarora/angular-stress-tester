import { Component, OnInit } from '@angular/core';
import { Service853Service } from '../../services/service-853.service';

@Component({
  selector: 'app-comp-853',
  templateUrl: './comp-853.component.html',
  styleUrls: ['./comp-853.component.css']
})
export class Comp853Component implements OnInit {

  constructor(private _service: Service853Service) { }

  ngOnInit() {
  }

}
