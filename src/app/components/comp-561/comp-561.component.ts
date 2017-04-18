import { Component, OnInit } from '@angular/core';
import { Service561Service } from '../../services/service-561.service';

@Component({
  selector: 'app-comp-561',
  templateUrl: './comp-561.component.html',
  styleUrls: ['./comp-561.component.css']
})
export class Comp561Component implements OnInit {

  constructor(private _service: Service561Service) { }

  ngOnInit() {
  }

}
