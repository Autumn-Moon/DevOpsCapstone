import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  loginHome() {
    console.log(this.route.url);
    // this.router.navigate(['admin'])
    this.router.navigate(['admin'], {relativeTo: this.route});

    
  }

}
