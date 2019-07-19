import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routing
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EntriesComponent } from './entries/entries.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// Services
import { EntryService } from './entry.service';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';

// Material Design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule, MatInputModule, MatCardModule ,MatSelectModule, MatTableModule, MatToolbarModule, MatDialogModule, MatListModule } from '@angular/material';
import { NewEntryComponent } from './new-entry/new-entry.component';

// Forms
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateEntryComponent } from './update-entry/update-entry.component';
import { DeleteEntryComponent } from './delete-entry/delete-entry.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    HeaderComponent,
    FooterComponent,
    NewEntryComponent,
    UpdateEntryComponent,
    DeleteEntryComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, MatButtonModule, MatTableModule, MatInputModule, MatCardModule ,MatSelectModule, MatToolbarModule, MatDialogModule, MatListModule,// Material Design
    ReactiveFormsModule, // For Forms
    HttpClientModule, // Send And Receive Data
    AppRoutingModule // Routing: app-routing.module.ts
  ],
  entryComponents: [UpdateEntryComponent],
  providers: [EntryService, AuthService], // Services
  bootstrap: [AppComponent]
})

export class AppModule { }
