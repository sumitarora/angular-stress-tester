import { Component, OnInit } from '@angular/core';
import { Service872Service } from '../../services/service-872.service';

@Component({
  selector: 'app-comp-872',
  templateUrl: './comp-872.component.html',
  styleUrls: ['./comp-872.component.css']
})
export class Comp872Component implements OnInit {

  constructor(private _service: Service872Service) { }

  ngOnInit() {
  }

}
