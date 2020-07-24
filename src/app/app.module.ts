import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { AdminComponent } from './components/admin/admin.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import {FormsModule}  from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule}  from '@angular/fire/firestore';
import {AngularFireAuthModule}  from '@angular/fire/auth';
import {AngularFireStorageModule}   from '@angular/fire/storage';
import {AuthguardsService}   from './services/authguards.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    AdminComponent,
    NotfoundComponent,
    NavbarComponent,
    ProductsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyAOgTNSfCc3vcSP-3foNItzhjF9wJW6Shg",
        authDomain: "shopping-6f220.firebaseapp.com",
        databaseURL: "https://shopping-6f220.firebaseio.com",
        projectId: "shopping-6f220",
        storageBucket: "shopping-6f220.appspot.com",
        messagingSenderId: "440803768370",
        appId: "1:440803768370:web:3e5e863792aa94f4f8642b",
        measurementId: "G-5ECD6Q41DP"
      }
    ),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule
    
    

    
  ],
  providers: [
    AuthguardsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
