import { Component, OnInit } from '@angular/core';
import { Service928Service } from '../../services/service-928.service';

@Component({
  selector: 'app-comp-928',
  templateUrl: './comp-928.component.html',
  styleUrls: ['./comp-928.component.css']
})
export class Comp928Component implements OnInit {

  constructor(private _service: Service928Service) { }

  ngOnInit() {
  }

}
