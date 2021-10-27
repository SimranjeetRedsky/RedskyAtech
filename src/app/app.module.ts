import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { TechnologiesComponent } from './Components/technologies/technologies.component';
import { TrainingComponent } from './Components/training/training.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { OurServicesComponent } from './Components/our-services/our-services.component';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDVWEApK41jYbaR9EgXyeavgNQTLlprcIw",
  authDomain: "redskyatech-294ea.firebaseapp.com",
  projectId: "redskyatech-294ea",
  storageBucket: "redskyatech-294ea.appspot.com",
  messagingSenderId: "972062841673",
  appId: "1:972062841673:web:2622cf9df62753c65a1898",
  measurementId: "G-V3R9CRQHSB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TechnologiesComponent,
    TrainingComponent,
    ContactUsComponent,
    OurServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
