import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { AppGlobals } from 'src/app/services/app.global';
import { filter } from 'rxjs';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.page.html',
  styleUrls: ['./vendors.page.scss'],
})
export class VendorsPage implements OnInit {
  isNotSingle: boolean = true;
  singleVendor!: any;
  selectedItem!: string;
  items = [
    {
      title: 'Item1',
      description: 'This is Item1',
      type: 'all',
    },
    {
      title: 'Item2',
      description: 'This is Item2',
      type: 'all',
    },
    {
      title: 'Item3',
      description: 'This is Item3',
      type: 'favorites',
    },
    {
      title: 'Item4',
      description: 'This is Item4',
      type: 'recent',
    },
    {
      title: 'Item5',
      description: 'This is Item5',
      type: 'recent',
    },
  ];

  selectedSegment = 'hospital';

  roleMsg!: string;

  pageData!: any;

  presentingElement!: any;

  searchOutput!: any;
  searchOutputGotResults = false;

  constructor(
    public appGlobal: AppGlobals,
    private popover: PopoverController,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');

    if (this.router.snapshot.data) {
      // console.log(this.router.snapshot?.data['pagetype'])
      // this.pageData.layoutType = this.router.snapshot?.data['layoutType']
      if (this.router.snapshot.data['isSingle']) {
        this.isNotSingle = false;
        const idC = this.router.snapshot.params['id']
        console.log(idC);
        const vend = this.appGlobal.vendors.filter(function (_item: { id: any; }){
          return _item.id == idC
        })
        console.log(vend)
        this.singleVendor = vend[0];
      }
    }
    const param = this.router.snapshot.params;
    console.log(param);
    if (param['part'] != 'listHospitals') {
      this.selectedSegment = 'insurance';
    }
  }

  async openMenu(e: Event) {
    const popover = await this.popover.create({
      component: MenuComponent,
      event: e,
    });

    await popover.present();

    const { role } = await popover.onDidDismiss();
    this.roleMsg = `Popover dismissed with role: ${role}`;
  }

  onSegmentChanged(event: any) {
    console.log(event);
    console.log('Segment changed', event.detail.value);
    this.selectedSegment = event.detail.value;
    // this.filterItems();
  }

  async closeMenu(ev: Event) {
    await this.popover.dismiss();
  }

  async onSearchChange(ev: any) {
    console.log(ev);

    if (ev.detail.value) {
      setTimeout(() => {
        const inputText = ev.detail.value.toLowerCase().trim();
        console.log('search for : ', ev.detail.value.toLowerCase());

        const results = this.appGlobal.vendors.filter(function (str: {
          nom: string;
        }) {
          return str.nom.toLowerCase().includes(inputText);
        });

        console.log(results);
        if (results.length > 0) {
          this.searchOutputGotResults = true;
          this.searchOutput = results;
        } else {
          (this.searchOutput = 'Aucun résultat pour : '), inputText;
        }
        // this.searchOutputGotResults
      }, 600);
    } else {
      this.searchOutputGotResults = true;
      this.searchOutput = null;
    }
  }
}
