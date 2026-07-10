import { expect, Locator, type Page } from '@playwright/test';
import { assert } from 'console';

export class DashboardPage{
  page: Page;
  //checkoutButton: Locator;
  cards: Locator;
  section: Locator;
  title: Locator;
  kpi: Locator;
  kpiValue: Locator;
  operationList: Locator;
  activityList: Locator;
  

    constructor(page: Page) {
      this.page = page;
      this.cards = page.locator('.rw-nav a');
      this.section = page.locator('#kpi');
      this.title= page.locator('.rw-panel-title');
      this.kpi= page.locator('.rw-kpi-label');
      this.kpiValue= page.locator('.rw-kpi-value');
      this.operationList= page.getByRole('listitem');
      this.activityList= page.getByRole('listitem');

    }
    async checkUrl(url:string) {
        await expect(this.page).toHaveURL(url);
    }

    async cardsListCount(){
        const count = await this.cards.count();
        console.log(count);
    }

    async checkClickableCards(expectedCards: string[]) {
        for (const card of expectedCards) {
            const cardLocator = this.cards.filter({ hasText: card });
            await expect(cardLocator).toBeVisible();
            await expect(cardLocator).toBeEnabled();
        }
    }

    async assertSection(titleText: string[]) {
        await expect(this.section).toBeVisible();
        for (const title of titleText) {
            const titleLocator = this.title.filter({ hasText: title });
            await expect(titleLocator).toHaveText(title);
        }
    }

    async assertKPIs(kpiText: string[]) {
        for (const text of kpiText) {
            const kpiLocator = this.kpi.filter({ hasText: text });
            await expect(kpiLocator).toHaveText(text);
        }
    }

    async assertKPIValue(kpiValue: string[]) {
        for (const value of kpiValue) {
            const kpiLocator = this.kpiValue.filter({ hasText: value });
            await expect(kpiLocator).toHaveText(value);
        }
    }

    async assertOperationsSection(expectedOperations: string[]) {
        for (const operation of expectedOperations) {
            const operationLocator = this.page.locator(`text=${operation}`);
            await expect(operationLocator).toBeVisible();
        }
    }

    async assertOperationsList(expectedList: string[]) {
        for (const item of expectedList) {
            const listItemLocator = this.operationList.filter({ hasText: item });
            await expect(listItemLocator).toBeVisible();
        }
    }

       async assertActivityList(expectedActivityList: string[]) {
        for (const item of expectedActivityList) {
            const listItemLocator = this.activityList.filter({ hasText: item });
            await expect(listItemLocator).toBeVisible();
        }
    }
}
