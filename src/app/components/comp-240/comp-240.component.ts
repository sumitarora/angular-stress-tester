import { Component, OnInit } from '@angular/core';
import { Service240Service } from '../../services/service-240.service';

@Component({
  selector: 'app-comp-240',
  templateUrl: './comp-240.component.html',
  styleUrls: ['./comp-240.component.css']
})
export class Comp240Component implements OnInit {

  constructor(private _service: Service240Service) { }

  ngOnInit() {
  }

}
