// //start project with server.js & npm init -y
// //get all your installs taken care of
// npm install express mongoose path body-parser --save
// ng new sample-app --routing

// ////CREATING A SERVICE
// ng g s http

// //REMEMBER VSCode's lightbulb will help with imports

// //app.module.ts
// @NgModule({
//     ...
//     providers: [HttpService],
//     ...
//  })

//  //app.module.ts
// import { FormsModule } from '@angular/forms';
// @NgModule({
//    ...
//    imports: [
//       BrowserModule,
//       HttpClientModule,
//       FormsModule //just skipping ahead for this one, might as well
//    ],
//    ...
// })

// //http.service.ts
// export class HttpService {
//     constructor(private _http: HttpClient){}
// }

// //app.component.ts
// export class AppComponent {
//     title = 'app';
//     constructor(private _httpService: HttpService){}
//   }
// //you know how to do the fetching data functions already. ALL DONE

// //ROUTING HAHAHAA
// //use this to Generate a Component
// ng g c component-name

// //app.component.html (example)
// <button [routerLink]="['beta']">Load Beta</button>
// <router-outlet></router-outlet> 

// //app-routing.module.ts
// //some/most of this will already be there, just in case you decide to do it all by hand and not do ng new app --routing
// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// const routes: Routes = [
//   { path: 'alpha',component: AlphaComponent },
//   { path: 'beta',component: BetaComponent },
//   // use a colon and parameter name to include a parameter in the url
//   { path: 'gamma/:id', component: GammaComponent },
//   { path: '', pathMatch: 'full', redirectTo: '/alpha' },
//   { path: '**', component: PageNotFoundComponent }
// ];
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

// //app.module.ts
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app-routing.module';
// @NgModule({
//   declarations: [AppComponent, AlphaComponent, BetaComponent, GammaComponent],
//   imports: [BrowserModule, AppRoutingModule],
//   providers: [],
//   bootstrap: [AppComponent]
// })

// //server.js
// //add towards the bottom so it knows where to go next for http requests!
// app.all("*", (req,res,next) => {
//     res.sendFile(path.resolve("./public/dist/index.html"))
//   });

// //app.components.ts
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Params, Router } from '@angular/router';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   constructor(
//     private _route: ActivatedRoute,
//     private _router: Router
//   ) {}
//   ngOnInit() {
//     this._route.params.subscribe((params: Params) => console.log(params['id']));
//   }
//   goHome() {
//     this._router.navigate(['/home']);
//   }
 
// }