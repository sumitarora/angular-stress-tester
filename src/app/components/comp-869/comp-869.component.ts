import { Component, OnInit } from '@angular/core';
import { Service869Service } from '../../services/service-869.service';

@Component({
  selector: 'app-comp-869',
  templateUrl: './comp-869.component.html',
  styleUrls: ['./comp-869.component.css']
})
export class Comp869Component implements OnInit {

  constructor(private _service: Service869Service) { }

  ngOnInit() {
  }

}
