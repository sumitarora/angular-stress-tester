import { Component, OnInit } from '@angular/core';
import { Service319Service } from '../../services/service-319.service';

@Component({
  selector: 'app-comp-319',
  templateUrl: './comp-319.component.html',
  styleUrls: ['./comp-319.component.css']
})
export class Comp319Component implements OnInit {

  constructor(private _service: Service319Service) { }

  ngOnInit() {
  }

}
