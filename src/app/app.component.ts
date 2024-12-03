import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs';
import { userInfo } from './user-auth/interfaces/userInfo';
import { UserInfoService } from './shared/service/user-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'proyectoDataBase';
  //VARIABLES
  userInfo?: userInfo;

  hiddenSidebarRoutes: string[] = ['/user/login'];
  showSidebar: boolean = false;
  constructor(private router: Router, private userInfoService: UserInfoService) {

  }

  ngOnInit(): void {
    this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      console.log(this.showSidebar);
      console.log(event.url);

      if (!this.hiddenSidebarRoutes.includes(event.url)) {
        console.log("entre");

        this.showSidebar = true;
        this.verificar();
      }else{
        this.showSidebar = false;
      }
    });
  }


  public verificar() {
    this.userInfoService.findUserInfo().subscribe((user) => {
      this.userInfo = user;
    });

  }

}
