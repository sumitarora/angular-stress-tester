import { Component, OnInit } from '@angular/core';
import { Service162Service } from '../../services/service-162.service';

@Component({
  selector: 'app-comp-162',
  templateUrl: './comp-162.component.html',
  styleUrls: ['./comp-162.component.css']
})
export class Comp162Component implements OnInit {

  constructor(private _service: Service162Service) { }

  ngOnInit() {
  }

}
