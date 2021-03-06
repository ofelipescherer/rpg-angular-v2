import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from 'src/services/util.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  theme: string | null = document.documentElement.getAttribute('data-theme') || 'light';

  id!: string;
  constructor(private router: Router, private utilService: UtilService) {
    this.id = this.router.url.split('/')[2];
  }
  ngOnInit(): void {
    this.utilService.changeID(this.id);
  }

  changeTheme(): void {
    let theme = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark');
    this.theme = theme === 'dark' ? 'light' : 'dark';
  }

  openNav() {
    document!.getElementById('mySidenav')!.style.display = 'flex';
    document!.getElementById('overlay')!.style.display = 'block';
    document!.getElementById('mySidenav')!.style!.zIndex = '20';
  }

  closeNav() {
    document!.getElementById('mySidenav')!.style.display = 'none';
    document!.getElementById('overlay')!.style.display = 'none';
    document!.getElementById('mySidenav')!.style!.zIndex = '1';
  }
}
