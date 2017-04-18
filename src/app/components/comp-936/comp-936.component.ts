import { Component, OnInit } from '@angular/core';
import { Service936Service } from '../../services/service-936.service';

@Component({
  selector: 'app-comp-936',
  templateUrl: './comp-936.component.html',
  styleUrls: ['./comp-936.component.css']
})
export class Comp936Component implements OnInit {

  constructor(private _service: Service936Service) { }

  ngOnInit() {
  }

}
