import { Component, OnInit } from '@angular/core';
import { Service791Service } from '../../services/service-791.service';

@Component({
  selector: 'app-comp-791',
  templateUrl: './comp-791.component.html',
  styleUrls: ['./comp-791.component.css']
})
export class Comp791Component implements OnInit {

  constructor(private _service: Service791Service) { }

  ngOnInit() {
  }

}
