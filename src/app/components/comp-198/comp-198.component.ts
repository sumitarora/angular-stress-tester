import { Component, OnInit } from '@angular/core';
import { Service198Service } from '../../services/service-198.service';

@Component({
  selector: 'app-comp-198',
  templateUrl: './comp-198.component.html',
  styleUrls: ['./comp-198.component.css']
})
export class Comp198Component implements OnInit {

  constructor(private _service: Service198Service) { }

  ngOnInit() {
  }

}
