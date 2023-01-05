import localeFr from "@angular/common/locales/fr";
import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { ToastrModule } from "ngx-toastr";

import { FixedPluginModule } from "./shared/fixedplugin/fixedplugin.module";
import { FooterModule } from "./shared/footer/footer.module";
import { NavbarModule } from "./shared/navbar/navbar.module";
import { SidebarModule } from "./sidebar/sidebar.module";

import { AppComponent } from "./app.component";
import { AppRoutes } from "./app.routing";

import { registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";

registerLocaleData(localeFr);

@NgModule({
  declarations: [AppComponent, AdminLayoutComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: false,
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "fr-FR",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
