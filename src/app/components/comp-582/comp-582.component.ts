import { Component, OnInit } from '@angular/core';
import { Service582Service } from '../../services/service-582.service';

@Component({
  selector: 'app-comp-582',
  templateUrl: './comp-582.component.html',
  styleUrls: ['./comp-582.component.css']
})
export class Comp582Component implements OnInit {

  constructor(private _service: Service582Service) { }

  ngOnInit() {
  }

}
